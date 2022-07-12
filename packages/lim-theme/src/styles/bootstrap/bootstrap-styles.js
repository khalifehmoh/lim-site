import { Global, css } from "frontity";
import bootstrapCss from "../../../../../releasedStyles/bootstrap.rtl.min.css";
import { fixFirstChildErrorCss } from "../../utils";

const fixedBootstrapCss = fixFirstChildErrorCss(bootstrapCss);

const BootstrapStyles = () => <Global styles={css(fixedBootstrapCss)} />;

export default BootstrapStyles;
