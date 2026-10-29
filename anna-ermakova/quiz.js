"use strict";

const quizId = "6ae11332bacbcd000ffd4734";
const cta = document.querySelector("[data-open-quiz]");
// Keep the ordinary link usable if the widget is blocked or still loading.
cta.addEventListener("click", (event) => {
  if (typeof window.Marquiz?.showModal === "function") {
    window.Marquiz.showModal(quizId);
    event.preventDefault();
  }
});

window.addEventListener("message", (event) => {
  const frame = document.getElementById(`marquiz__frame_${quizId}`);
  if (event.origin !== "https://quiz.marquiz.ru" || !frame || event.source !== frame.contentWindow) return;
  if (event.data?.type !== "anna-quiz-close" || event.data.quizId !== quizId) return;
  document.getElementById("marquiz__close")?.click();
  cta.focus();
});

const script = document.createElement("script");
script.async = true;
script.src = "https://script.marquiz.ru/v2.js";
script.onload = () => window.Marquiz.init({
  host: "https://quiz.marquiz.ru",
  region: "ru",
  id: quizId,
  autoOpen: false,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false,
});
document.head.append(script);
