import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../anna-ermakova/marquiz-design.js', import.meta.url), 'utf8');
const nodes = new Map();
const count = { textContent: '' }, fill = { style: {} }, progress = { setAttribute(key, value) { this[key] = value; } };
let title = 'Какую квартиру вы ищете?', titleTestId = 'quiz-question-title', brand, observer;
const root = {
  querySelector(selector) {
    if (selector === '.anna-quiz-brand') return brand;
    return title && selector.includes(`[data-testid="${titleTestId}"]`) ? {textContent: title} : null;
  },
  prepend(value) { brand = value; },
  setAttribute(key, value) { this[key] = value; },
};
const document = {
  addEventListener() {},
  documentElement: {}, head: {append(value) { nodes.set(value.id, value); }},
  getElementById(id) { return nodes.get(id); }, querySelector() { return root; },
  createElement() { return { querySelector(selector) { return selector === '.anna-quiz-count' ? count : selector === '.anna-quiz-progress i' ? fill : progress; } }; },
};
class MutationObserver { constructor(callback) { observer = callback; } observe() {} }
runInNewContext(source, {document, MutationObserver});
assert.equal(count.textContent, 'Вопрос 1 из 3');
assert.equal(progress['aria-valuenow'], '1');
const firstBrand = brand;
title = 'На какой бюджет ориентируетесь?'; observer();
assert.equal(count.textContent, 'Вопрос 2 из 3');
assert.equal(brand, firstBrand, 'Navigation must not duplicate the header');
title = 'Какую квартиру вы ищете?'; observer();
assert.equal(progress['aria-valuenow'], '1', 'Back navigation must update progress');

titleTestId = 'quiz-mobile-question-title';
title = 'Как планируете покупать?'; observer();
assert.equal(count.textContent, 'Вопрос 3 из 3', 'Mobile question titles must update progress too');
title = ''; observer();
assert.equal(count.textContent, '');
assert.equal(fill.style.width, '100%');
runInNewContext(source, {document, MutationObserver});
assert.equal(nodes.size, 1, 'The styling integration must be idempotent');
console.log('Marquiz branding: forward/back progress, form state and duplicate prevention passed.');
