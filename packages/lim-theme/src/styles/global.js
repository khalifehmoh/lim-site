import { Global, css } from "frontity";

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        direction: rtl;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: var(--bs-white);
      }

      img {
        max-width: 100%;
      }

      p {
        margin-bottom: 0.75em;
      }
    `}
  />
);

export default GlobalStyles;
