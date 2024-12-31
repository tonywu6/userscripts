// ==UserScript==
// @name        Google Search AI Overview
// @match       *://*.google.com/search*
// ==/UserScript==

(() => {
  document.querySelectorAll("h1").forEach((elem) => {
    if (elem.textContent === "AI Overview") {
      const parent = elem.parentElement;
      if (parent) {
        parent.style.visibility = "hidden";
        parent.style.height = "0px";
        parent.style.marginBottom = "24px";
      }
    }
  });
  document.querySelectorAll("h2").forEach((elem) => {
    if (elem.textContent === "AI Overview") {
      const parent = elem.parentElement;
      if (parent) {
        parent.style.display = "none";
      }
    }
  });
})();
