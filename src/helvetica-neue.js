// ==UserScript==
// @name        Helvetica Neue
// @match       https://portswigger.net/*
// @match       https://toot.cafe/*
// @inject-into content
// @grant       GM.addStyle
// ==/UserScript==
//

/**
 * @param {TemplateStringsArray} strings
 * @param  {...unknown} values
 * @returns {string}
 */
const css = (strings, ...values) =>
  strings.reduce((result, str, i) => result + str + (values[i] || ""), "");

const style = css`
  :root,
  body,
  * {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  @font-face {
    font-family: "Helvetica";
    src: local("HelveticaNeue");
  }

  @font-face {
    font-family: "Helvetica";
    font-weight: bold;
    src: local("HelveticaNeue-Bold");
  }

  @font-face {
    font-family: "Helvetica";
    font-style: italic;
    src: local("HelveticaNeue-Italic");
  }

  @font-face {
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
    src: local("HelveticaNeue-BoldItalic");
  }

  @font-face {
    font-family: "Helvetica-Bold";
    src: local("HelveticaNeue-Bold");
  }

  @font-face {
    font-family: "Helvetica-Oblique";
    src: local("HelveticaNeue-Italic");
  }

  @font-face {
    font-family: "Helvetica-BoldOblique";
    src: local("HelveticaNeue-BoldItalic");
  }

  @font-face {
    font-family: "Helvetica-Light";
    src: local("HelveticaNeue-Light");
  }

  @font-face {
    font-family: "Helvetica-LightOblique";
    src: local("HelveticaNeue-LightItalic");
  }

  @font-face {
    font-family: "Arial";
    font-display: swap;
    src: local("HelveticaNeue");
  }

  @font-face {
    font-family: "Arial";
    font-weight: bold;
    src: local("HelveticaNeue-Bold");
  }

  @font-face {
    font-family: "Arial";
    font-style: italic;
    src: local("HelveticaNeue-Italic");
  }

  @font-face {
    font-family: "Arial";
    font-weight: bold;
    font-style: italic;
    src: local("HelveticaNeue-BoldItalic");
  }

  @font-face {
    font-family: "Arial Unicode MS";
    src: local("HelveticaNeue");
  }

  @font-face {
    font-family: "Arial Unicode MS";
    font-weight: bold;
    src: local("HelveticaNeue-Bold");
  }

  @font-face {
    font-family: "Arial Unicode MS";
    font-style: italic;
    src: local("HelveticaNeue-Italic");
  }

  @font-face {
    font-family: "Arial Unicode MS";
    font-weight: bold;
    font-style: italic;
    src: local("HelveticaNeue-BoldItalic");
  }
`;

GM.addStyle(style);
