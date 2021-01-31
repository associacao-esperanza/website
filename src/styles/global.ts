import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "MADE TOMMY";
    src: url("/fonts/made_tommy/MADE TOMMY Medium_PERSONAL USE.otf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "MADE TOMMY";
    src: url("/fonts/made_tommy/MADE TOMMY Regular_PERSONAL USE.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "MADE TOMMY";
    src: url("/fonts/made_tommy/MADE TOMMY Light_PERSONAL USE.otf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "MADE TOMMY";
    src: url("/fonts/made_tommy/MADE TOMMY Thin_PERSONAL USE.otf");
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/work_sans/WorkSans-VariableFont_wght.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/work_sans/WorkSans-Italic-VariableFont_wght/ttf");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  * {
    font-family: MADE TOMMY, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
  }

  html {
    padding: env(safe-area-inset);
  }

  html,
  body {
    padding: 0;
    margin: 0;
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

  ::placeholder {
    color: rgba(0, 0, 0, 0.7);   
    }

  a:hover {
  }
`;

export default GlobalStyles;
