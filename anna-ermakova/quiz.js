"use strict";

const quizId = "6ae11332bacbcd000ffd4734";
// Keep the ordinary link usable if the widget is blocked or still loading.
document.querySelector("[data-open-quiz]").addEventListener("click", (event) => {
  if (typeof window.Marquiz?.showModal === "function") {
    window.Marquiz.showModal(quizId);
    event.preventDefault();
  }
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
