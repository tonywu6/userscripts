// ==UserScript==
// @name        Revert YouTube emojis
// @include     *://youtube.com/*
// @include     *://www.youtube.com/*
// @include     *://youtu.be/*
// ==/UserScript==

/* eslint-env browser */

window.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    /** @type {NodeListOf<HTMLImageElement>} */ (
      document.querySelectorAll('img[src^="https://www.youtube.com/s/gaming/emoji/"]')
    ).forEach((img) => {
      const replacement = document.createElement("span");
      replacement.innerText = img.alt;
      img.replaceWith(replacement);
    });
  });
  observer.observe(document.documentElement, { subtree: true, childList: true });
});
