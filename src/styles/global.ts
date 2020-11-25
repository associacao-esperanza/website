import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "MADE TOMMY";
    src: url("/fonts/made_tommy/MADE TOMMY Regular_PERSONAL USE.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans/WorkSans-VariableFont_wght.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans/WorkSans-Italic-VariableFont_wght/ttf");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "MADE TOMMY", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #ffffff;
    color: #000000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  a:hover {
  }
`;

export default GlobalStyles;
