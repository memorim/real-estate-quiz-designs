/* Paste as a JavaScript script tag in Marquiz > Integrations > Custom code. */
(() => {
  'use strict';
  if (document.getElementById('anna-quiz-style')) return;
  const style = document.createElement('style');
  style.id = 'anna-quiz-style';
  style.textContent = `
    .quiz-container{box-sizing:border-box!important;max-width:1200px!important;margin:auto!important;padding:34px 48px!important;display:flex!important;flex-direction:column!important;min-height:min(790px,100dvh)!important;height:min(790px,100dvh)!important;background:#fff!important;color:#152c49!important}
    .quiz{height:auto!important;min-height:0!important;flex:1!important;border-radius:0!important}
    .quiz-content-width{max-width:none!important;width:100%!important}
    .quiz-content-gutter{padding-left:0!important;padding-right:0!important}
    .quiz__questions{padding-top:0!important;padding-left:0!important;padding-right:0!important;scrollbar-gutter:auto!important}
    :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]){font-size:36px!important;line-height:1.25!important;font-weight:600!important;color:#152c49!important;padding-top:0!important;margin:0!important}
    :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"])::after{content:"Выберите один вариант";display:block;margin-top:14px;font-size:17px;font-weight:400;line-height:1.5}
    .question-wrapper{padding-top:30px!important}
    .answer-variants__group{gap:18px 24px!important;overflow:visible!important}
    .answer-variants__variant{border:1px solid #d7ded8!important;border-radius:5px!important;background:white!important;box-shadow:none!important;min-height:94px!important}
    .answer-variants__variant:has(input:checked){border-color:#657dff!important}
    .answer-variants__variant:hover{border-color:#9aaaff!important}
    .answer-variants__variant:focus-within{outline:2px solid #254bd6;outline-offset:3px}
    .answer-variants__variant .quiz-choice{display:flex!important;flex-direction:row!important;align-items:center!important;gap:20px!important;min-height:92px!important;padding:20px 24px!important;color:#152c49!important;font-size:22px!important}
    .answer-variants__variant [data-quiz-check]{width:24px!important;height:24px!important;min-width:24px!important;border:1.5px solid #657dff!important;background:transparent!important;border-radius:50%!important}
    .answer-variants__variant input:not(:checked) + [data-quiz-check]::before{background:transparent!important}
    .answer-variants__variant input:checked + [data-quiz-check]{background:#254bd6!important;border-color:#254bd6!important}
    .answer-variants__variant [data-quiz-choice-label]{margin:0!important}
    [data-testid="quiz-navbar-progress"]{display:none!important}
    .quiz__navbar{border-radius:0!important;margin-top:auto!important}
    .quiz-navbar{padding:30px 0 0!important;background:white!important;min-height:88px!important}
    [data-testid="quiz-navbar-buttons"]{flex:1!important;justify-content:space-between!important;gap:24px!important}
    .anna-return{display:none;font-size:14px;color:#152c49;text-decoration:none;margin-right:24px;white-space:nowrap}
    [data-anna-question="1"] .anna-return{display:block}
    [data-anna-question="1"] [data-testid="quiz-navbar-prev"]{display:none!important}
    [data-anna-question="1"] [data-testid="quiz-navbar-buttons"]{justify-content:flex-end!important}
    [data-testid="quiz-navbar-next"]{min-height:64px!important;min-width:220px!important;font-size:18px!important;padding:0 24px!important;border-radius:5px!important;background:#254bd6!important;color:#fff!important}
    [data-testid="quiz-navbar-prev"]{min-width:54px!important;min-height:54px!important;color:#152c49!important}
    .anna-quiz-brand{flex-shrink:0;color:#152c49;font-family:Inter,"Segoe UI",Arial,sans-serif;padding-bottom:24px}
    .anna-quiz-top{display:flex;align-items:center;justify-content:space-between;gap:24px}
    .anna-quiz-logo{display:flex;align-items:center;gap:13px;text-decoration:none;color:inherit}
    .anna-quiz-logo strong{display:block;font-size:18px;font-weight:600;line-height:1.3}
    .anna-quiz-logo small{display:block;margin-top:5px;text-transform:uppercase;letter-spacing:1px;font-size:8px;line-height:1.5}
    .anna-quiz-close{font-size:14px;text-decoration:none;white-space:nowrap;color:inherit;padding:10px 0}
    .anna-quiz-progress{height:4px;background:#d5dbd2;border-radius:3px;overflow:hidden;margin-top:38px}
    .anna-quiz-progress i{display:block;height:100%;background:#254bd6;transition:width .2s}
    .anna-quiz-count{font-size:14px;line-height:1.4;margin:26px 0 0;text-align:left}
    @media(min-width:701px) and (max-height:720px){
      .quiz-container{padding:28px 40px!important}
      .anna-quiz-progress{margin-top:28px}.anna-quiz-count{margin-top:20px}.anna-quiz-brand{padding-bottom:20px}
      :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]){font-size:32px!important}
      :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"])::after{font-size:16px;margin-top:12px}
      .quiz-questions-header{padding-bottom:12px!important}.question-wrapper{padding-top:18px!important}
      .answer-variants__group{gap:14px 24px!important}
      .answer-variants__variant{min-height:80px!important}
      .answer-variants__variant .quiz-choice{min-height:78px!important;padding:16px 24px!important;font-size:20px!important}
      [data-anna-question="2"] .answer-variants__variant{min-height:64px!important}
      [data-anna-question="2"] .answer-variants__variant .quiz-choice{min-height:62px!important;padding:12px 20px!important;font-size:18px!important}
      .quiz-navbar{padding-top:20px!important;min-height:84px!important}
    }
    @media(max-width:700px){
      .quiz-container{padding:22px!important;min-height:100dvh!important;height:auto!important}
      .anna-quiz-logo{gap:8px}.anna-quiz-logo svg{width:25px;height:28px}.anna-quiz-logo strong{font-size:14px}.anna-quiz-logo small{font-size:6px;letter-spacing:.6px}.anna-quiz-close{font-size:11px}.anna-quiz-progress{margin-top:28px;height:3px}.anna-quiz-count{font-size:12px;margin-top:24px}.anna-quiz-brand{padding-bottom:22px}
      :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"]){font-size:26px!important}
      :is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"])::after{font-size:14px;margin-top:12px}
      .question-wrapper{padding-top:24px!important}
      .answer-variants__group{grid-template-columns:1fr!important;gap:12px!important}
      .answer-variants__variant{min-height:66px!important}
      .answer-variants__variant .quiz-choice{min-height:64px!important;padding:16px!important;gap:14px!important;font-size:17px!important}
      .answer-variants__variant [data-quiz-check]{width:20px!important;height:20px!important;min-width:20px!important}
      [data-testid="quiz-navbar-next"]{min-height:56px!important;min-width:170px!important;font-size:16px!important;padding:0 18px!important}
      .quiz-navbar{padding-top:24px!important}
      .anna-return{font-size:11px;white-space:normal;max-width:100px;margin-right:12px}
    }
    @media(prefers-reduced-motion:reduce){.anna-quiz-progress i{transition:none}}
  `;
  document.head.append(style);
  const titles = ['Какую квартиру вы ищете?', 'На какой бюджет ориентируетесь?', 'Как планируете покупать?'];
  document.addEventListener('click', (event) => {
    if (window.parent === window || !event.target?.closest?.('.anna-quiz-close, .anna-return, .anna-quiz-logo')) return;
    let origin;
    try { origin = new URL(document.referrer).origin; } catch { return; }
    if (!['https://memorim.github.io', 'http://127.0.0.1:8096'].includes(origin)) return;
    window.parent.postMessage({type: 'anna-quiz-close', quizId: '6ae11332bacbcd000ffd4734'}, origin);
    event.preventDefault();
  });
  function decorate() {
    const root = document.querySelector('.quiz-container');
    if (!root) return;
    let brand = root.querySelector('.anna-quiz-brand');
    if (!brand) {
      brand = document.createElement('header');
      brand.className = 'anna-quiz-brand';
      brand.innerHTML = '<div class="anna-quiz-top"><a class="anna-quiz-logo" href="https://memorim.github.io/real-estate-quiz-designs/anna-ermakova/" target="_top"><svg width="32" height="34" viewBox="0 0 32 34" fill="none" aria-hidden="true"><path d="M3 31V10L16 3l13 7v21M11 31V18h10v13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span><strong>Анна Ермакова</strong><small>Недвижимость · Екатеринбург</small></span></a><a class="anna-quiz-close" href="https://memorim.github.io/real-estate-quiz-designs/anna-ermakova/" target="_top">Закрыть ×</a></div><div class="anna-quiz-progress" role="progressbar" aria-label="Прогресс квиза" aria-valuemin="0" aria-valuemax="3"><i></i></div><p class="anna-quiz-count" aria-live="polite"></p>';
      root.prepend(brand);
    }
    const title = root.querySelector(':is([data-testid="quiz-question-title"],[data-testid="quiz-mobile-question-title"])');
    const index = titles.indexOf(title?.textContent.trim());
    const count = brand.querySelector('.anna-quiz-count');
    const label = index < 0 ? '' : `Вопрос ${index + 1} из 3`;
    root.setAttribute('data-anna-question', String(index + 1));
    if (count.textContent !== label) count.textContent = label;
    brand.querySelector('.anna-quiz-progress i').style.width = `${index < 0 ? 100 : (index + 1) * 100 / 3}%`;
    brand.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(index < 0 ? 3 : index + 1));
    const nav = root.querySelector('.quiz-navbar');
    if (nav && !nav.querySelector('.anna-return')) {
      const back = document.createElement('a');
      back.className = 'anna-return';
      back.href = 'https://memorim.github.io/real-estate-quiz-designs/anna-ermakova/';
      back.target = '_top';
      back.textContent = 'Вернуться к предложению';
      nav.prepend(back);
    }
  }
  new MutationObserver(decorate).observe(document.documentElement, {childList: true, subtree: true});
  decorate();
})();
