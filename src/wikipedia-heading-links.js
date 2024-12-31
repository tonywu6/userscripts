// ==UserScript==
// @name            Wikipedia Heading Links
// @description     Add links to headings in Wikipedia pages
// @match           *://*.wikipedia.org/*
// @match           *://*.wiktionary.org/*
// ==/UserScript==

document.querySelectorAll(".mw-headline").forEach((heading) => {
  if (!heading.id) {
    return;
  }
  const link = document.createElement("a");
  link.href = `#${heading.id}`;
  link.innerText = "#";
  link.style.display = "inline-block";
  link.style.marginInlineStart = "0.3em";
  heading.after(link);
});
