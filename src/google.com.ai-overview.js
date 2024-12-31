// ==UserScript==
// @name        Google Search AI Overview
// @match       *://*.google.com/search*
// ==/UserScript==

(() => {
  document.querySelectorAll("h1").forEach((elem) => {
    if (elem.textContent === "AI Overview") {
      if (elem.parentElement) {
        elem.parentElement.style.display = "none";
      }
    }
  });
})();
