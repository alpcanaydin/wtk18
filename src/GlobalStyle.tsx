import { createGlobalStyle } from './theme';

const GlobalStyle = createGlobalStyle`
  /* stylelint-disable */
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  footer,
  header,
  nav,
  section {
    display: block
  }

  h1 {
    font-size: 2em;
    margin: .67em 0
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
  }

  a:active,
  a:hover {
    outline-width: 0
  }

  video {
    display: inline-block
  }

  img {
    border-style: none
  }

  svg:not(:root) {
    overflow: hidden
  }

  button {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
    text-transform: none
  }

  button,
  html [type=button] {
    -webkit-appearance: button
  }

  [type=button]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0
  }

  [type=button]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
  }

  body,
  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga", "kern";
    -webkit-font-feature-settings: "liga", "kern";
    -moz-font-feature-settings: "liga", "kern";
    font-kerning: normal;
    -webkit-font-kerning: normal;
    -moz-font-kerning: normal
  }
  /* stylelint-enable */

  body {
    margin: 0;
    color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: ${props => props.theme.bodyFontSize};
    line-height: ${props => props.theme.lineHeight};
    text-align: left;
  }
`;

export default GlobalStyle;
