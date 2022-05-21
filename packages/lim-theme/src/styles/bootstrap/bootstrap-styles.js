import { Global, css } from "frontity";
import bootstrapCss from "../../../../../releasedStyles/bootstrap.rtl.min.css";

// Fix Bootstrap CSS
const nthChildToNthChildType = (css) =>
  css.replace(/\:nth\-child/g, `:nth-type`);
const firstChildToFirstOfType = (css) =>
  css.replace(/\:first\-child/g, `:first-of-type`);
const nthLastChildToNthLastChildType = (css) =>
  css.replace(/\:nth\-last\-child/g, `:nth-last-of-type`);

const fixCss = (css) =>
  nthLastChildToNthLastChildType(
    firstChildToFirstOfType(nthChildToNthChildType(css))
  );

const fixedBootstrapCss = fixCss(bootstrapCss);

const BootstrapStyles = () => <Global styles={css(fixedBootstrapCss)} />;

export default BootstrapStyles;
