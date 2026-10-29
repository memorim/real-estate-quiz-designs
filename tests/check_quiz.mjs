import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../anna-ermakova/quiz.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../anna-ermakova/index.html', import.meta.url), 'utf8');
let click, loadedScript, opened, config;
const window = {};
runInNewContext(source, { window, document: {
  querySelector: () => ({ addEventListener: (_, listener) => { click = listener; } }),
  createElement: () => ({}), head: { append: script => { loadedScript = script; } },
} });
let prevented = false;
const event = { preventDefault() { prevented = true; } };
click(event);
assert.equal(prevented, false, 'The real link must remain usable without the widget');
window.Marquiz = { init: value => { config = value; }, showModal: id => { opened = id; } };
loadedScript.onload();
click(event);
assert.equal(prevented, true);
assert.equal(opened, config.id);
assert.ok(html.includes(`https://mrqz.me/${opened}`), 'Fallback and popup must use the same quiz');
assert.equal(config.autoOpen, false);
assert.equal(config.disableOnMobile, false);
assert.equal(loadedScript.src, 'https://script.marquiz.ru/v2.js');
console.log('Marquiz popup, matching fallback, mobile and load failure checks: OK');
