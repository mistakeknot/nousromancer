import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const PLUGIN_PATH = new URL('../plugins/dtla-mission-control/dashboard/dist/index.js', import.meta.url);
const README_PATH = new URL('../README.md', import.meta.url);

function flattenText(node) {
  if (node == null || typeof node === 'boolean') return [];
  if (typeof node === 'string' || typeof node === 'number') return [String(node)];
  if (Array.isArray(node)) return node.flatMap(flattenText);
  return flattenText(node.children || []);
}

function collectLinks(node, links = []) {
  if (node == null || typeof node !== 'object') return links;
  if (node.type === 'a') links.push(node.props || {});
  for (const child of node.children || []) collectLinks(child, links);
  return links;
}

function findNode(node, predicate) {
  if (node == null || typeof node !== 'object') return null;
  if (predicate(node)) return node;
  for (const child of node.children || []) {
    const match = findNode(child, predicate);
    if (match) return match;
  }
  return null;
}

function collectForbiddenInteractiveProps(node, found = []) {
  if (node == null || typeof node !== 'object') return found;
  const props = node.props || {};
  if (node.type === 'a' || node.type === 'button') found.push(node.type);
  for (const key of Object.keys(props)) {
    if (/^on[A-Z]/.test(key) || key === 'href') found.push(key);
  }
  for (const child of node.children || []) collectForbiddenInteractiveProps(child, found);
  return found;
}

async function renderRegisteredSlot(slotName, missionData) {
  const source = await readFile(PLUGIN_PATH, 'utf8');
  const slots = new Map();
  const fakeState = missionData || { status: null, sessions: [], error: null };
  const react = {
    createElement(type, props, ...children) {
      if (typeof type === 'function') return type({ ...(props || {}), children });
      return { type, props: props || {}, children };
    },
    useEffect() {},
    useState(initial) {
      if (initial && Object.hasOwn(initial, 'status') && Object.hasOwn(initial, 'sessions')) {
        return [fakeState, () => {}];
      }
      return [initial, () => {}];
    },
  };
  const sandbox = {
    window: {
      __HERMES_PLUGIN_SDK__: {
        React: react,
        hooks: react,
        api: {},
      },
      __HERMES_PLUGINS__: {
        register() {},
        registerSlot(name, slot, component) {
          slots.set(slot, component);
        },
      },
    },
    document: undefined,
    setInterval() { return 1; },
    clearInterval() {},
  };

  vm.runInNewContext(source, sandbox, { filename: PLUGIN_PATH.pathname });
  const component = slots.get(slotName);
  assert.equal(typeof component, 'function', `${slotName} slot is registered`);
  return component({});
}

test('pre-main renders a minimal Now Bar with live Hermes state and trace action', async () => {
  const node = await renderRegisteredSlot('pre-main', {
    status: { gateway_running: true, active_sessions: 1, version: '0.11.0' },
    sessions: [{ id: 'sess-1', title: 'Build DTLA plugin', is_active: true }],
    error: null,
  });
  const text = flattenText(node).join(' ');
  const links = collectLinks(node);

  assert.match(text, /\bNow\b/);
  assert.match(text, /Gateway live/i);
  assert.match(text, /1 active/i);
  assert.match(text, /Build DTLA plugin/i);
  assert.match(text, /Trace/i);
  assert.doesNotMatch(text, /mission deck/i);
  assert.doesNotMatch(text, /Live dashboard signal/i);
  assert.ok(links.some((link) => link.href === '/sessions'), 'Trace action links to sessions');
});

test('pre-main Now Bar makes offline state actionable without decorative telemetry copy', async () => {
  const node = await renderRegisteredSlot('pre-main', {
    status: { gateway_running: false, active_sessions: 0, version: '0.11.0' },
    sessions: [],
    error: null,
  });
  const text = flattenText(node).join(' ');
  const links = collectLinks(node);

  assert.match(text, /Gateway offline/i);
  assert.match(text, /0 active/i);
  assert.match(text, /Open logs/i);
  assert.doesNotMatch(text, /session heat|agent signal|gateway relay/i);
  assert.ok(links.some((link) => link.href === '/logs'), 'offline CTA links to logs');
});

test('README explains the Now Bar usefulness in judge-scannable language', async () => {
  const source = await readFile(README_PATH, 'utf8');

  assert.match(source, /persistent Now Bar/i);
  assert.match(source, /gateway health/i);
  assert.match(source, /active runs/i);
  assert.match(source, /latest trace/i);
  assert.match(source, /next useful action/i);
});

test('pre-main renders a Masaq workstream card with chat, Beads, repo, next action, and evidence handles', async () => {
  const node = await renderRegisteredSlot('pre-main', {
    status: { gateway_running: true, active_sessions: 1, version: '0.11.0' },
    sessions: [{ id: 'sess-1', title: 'Prototype Masaq card', is_active: true }],
    error: null,
  });
  const text = flattenText(node).join(' ');

  assert.match(text, /Masaq workstream/i);
  assert.match(text, /Discord thread/i);
  assert.match(text, /generalsystemsventures-5k5/);
  assert.match(text, /gensysven\/generalsystemsventures/);
  assert.match(text, /prototype dashboard workstream card/i);
  assert.match(text, /docs\/ops\/masaq-interaction-model\.md/);
});

test('Masaq workstream proof stays non-authoritative and avoids private Discord IDs', async () => {
  const pluginSource = await readFile(PLUGIN_PATH, 'utf8');
  const readmeSource = await readFile(README_PATH, 'utf8');
  const node = await renderRegisteredSlot('pre-main');
  const text = flattenText(node).join(' ');
  const combined = `${pluginSource}\n${readmeSource}\n${text}`;

  assert.match(text, /prepare dispatch packet/i);
  assert.doesNotMatch(text, /git push|merge api|vercel deploy|bd create/i);
  assert.doesNotMatch(combined, /discord(?:app)?\.com\/channels/i);
  assert.doesNotMatch(combined, /\b\d{17,20}\b/);
  assert.doesNotMatch(combined, /https?:\/\/[^/\s:@]+:[^/\s@]+@/i);
  assert.doesNotMatch(combined, /(?:api[_-]?key|token|secret|password|bearer|webhook|client[_-]?secret|github_pat_|ghp_|sk-[A-Za-z0-9]|xox[baprs]-|AKIA[0-9A-Z]{16}|ASIA[0-9A-Z]{16}|ya29\.|SG\.|pypi-|npm_)/i);
  assert.doesNotMatch(pluginSource, /channel[_-]?id\s*[:=]/i);
  assert.doesNotMatch(pluginSource, /thread[_-]?id\s*[:=]/i);
});

test('Masaq workstream card remains a static read-only card', async () => {
  const node = await renderRegisteredSlot('pre-main');
  const card = findNode(node, (candidate) => candidate.props?.['aria-label'] === 'Masaq workstream');

  assert.ok(card, 'Masaq workstream card exists');
  assert.deepEqual(collectForbiddenInteractiveProps(card), []);
});

test('README documents the Masaq chat-to-dashboard handle convention without private IDs', async () => {
  const source = await readFile(README_PATH, 'utf8');

  assert.match(source, /Masaq workstream card/);
  assert.match(source, /Discord thread title \+ Beads ID/);
  assert.match(source, /Do not store raw Discord channel IDs or thread IDs/);
});
