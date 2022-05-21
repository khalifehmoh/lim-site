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

      img {
        max-width: 100%;
      }

      h2 {
        margin: 0.5em 0;
      }

      p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
        color: var(--bs-dark);
      }
    `}
  />
);

export default GlobalStyles;
