// ==UserScript==
// @name        lpsg.com
// @match       *://*.lpsg.com/*
// @version     0.1.0
// @description
// ==/UserScript==

(() => {
  "use strict";

  document
    .querySelectorAll(".video-easter-egg-blocker")
    .forEach((elem) => elem.remove());

  document
    .querySelectorAll(".video-easter-egg-overlay")
    .forEach((elem) => elem.remove());

  /** @type {NodeListOf<HTMLElement>} */ (
    document.querySelectorAll(".bbMediaWrapper")
  ).forEach((elem) => {
    if (
      !elem.querySelector(".video-easter-egg-poster img") &&
      !elem.querySelector("video")
    ) {
      return;
    }
    elem.className = "";
    elem.style.display = "inline-block";
    elem.style.width = "560px";
    elem.style.maxWidth = "100%";
    elem.style.margin = "0";
    /** @type {NodeListOf<HTMLElement>} */ (
      elem.querySelectorAll(".bbMediaWrapper-inner")
    ).forEach((elem) => {
      elem.className = "";
      elem.style.position = "relative";
      elem.style.paddingBottom = "56.25%";
      elem.style.height = "0";
    });
  });

  /**
   * @param {string} base
   * @param {string[]} exts
   * @param {string|undefined} poster
   * @returns {HTMLVideoElement}
   */
  const createVideo = (base, exts, poster) => {
    const video = document.createElement("video");

    video.controls = true;
    video.muted = false;

    if (poster) {
      video.poster = poster;
      video.preload = "none";
    } else {
      video.preload = "metadata";
    }

    exts.forEach((ext) => {
      const source = document.createElement("source");
      source.src = `${base}${ext}`;
      video.appendChild(source);
    });

    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";

    return video;
  };

  /** @type {NodeListOf<HTMLVideoElement>} */ (
    document.querySelectorAll(".bbWrapper video")
  ).forEach((elem) => {
    const base = elem.querySelector("source")?.src;

    if (!base) {
      return;
    }

    elem.replaceWith(createVideo(base, [""], undefined));
  });

  /** @type {NodeListOf<HTMLImageElement>} */ (
    document.querySelectorAll(".video-easter-egg-poster img")
  ).forEach((elem) => {
    const poster = elem.src;

    if (!poster) {
      return;
    }

    const RE_VIDEO_PATH_1 =
      /\/data\/attachments\/posters\/(?<id6>\d+)\/(?<id9>\d+)-(?<checksum>[a-z0-9]+).*$/;
    const RE_VIDEO_PATH_2 =
      /\/data\/+lsvideo\/thumbnails\/(?<year>\d+)\/(?<month>\d+)\/(?<name>.+)\..+$/;

    /** @type{string|undefined} */
    let base = undefined;

    let match1 = RE_VIDEO_PATH_1.exec(poster);
    if (match1) {
      const { id6, id9, checksum } = match1.groups ?? {};
      base = `https://cdn-videos.lpsg.com/data/video/${id6}/${id9}-${checksum}`;
    }
    let match2 = RE_VIDEO_PATH_2.exec(poster);
    if (match2) {
      const { year, month, name } = match2.groups ?? {};
      base = `https://cdn-videos.lpsg.com/data/lsvideo/videos/${year}/${month}/${name}`;
    }

    if (!base) {
      return;
    }

    elem.replaceWith(createVideo(base, [".mp4", ".m4v", ".mov", ".webm"], poster));
  });
})();
