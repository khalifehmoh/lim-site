import { Global, css, connect } from "frontity";
import DubaiRegularWoff2 from "../fonts/Dubai/DubaiW23-Regular.woff2";
import DubaiRegularWoff from "../fonts/Dubai/DubaiW23-Regular.woff";
import DubaiMediumWoff2 from "../fonts/Dubai/DubaiW23-Medium.woff2";
import DubaiMediumWoff from "../fonts/Dubai/DubaiW23-Medium.woff";
import DubaiBoldWoff2 from "../fonts/Dubai/DubaiW23-Bold.woff2";
import DubaiBoldWoff from "../fonts/Dubai/DubaiW23-Bold.woff";

const fonts = {
  Dubai: {
    Regular: [DubaiRegularWoff2, DubaiRegularWoff],
    Medium: [DubaiMediumWoff2, DubaiMediumWoff],
    Bold: [DubaiBoldWoff2, DubaiBoldWoff],
  },
};

const Fonts = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Dubai";
          src: url(${fonts.Dubai.Medium[0]}) format("woff2"),
            url(${fonts.Dubai.Medium[1]}) format("woff");
          font-weight: normal;
          font-display: "swap";
          font-style: normal;
        }

        @font-face {
          font-family: "Dubai";
          src: url(${fonts.Dubai.Regular[0]}) format("woff2"),
            url(${fonts.Dubai.Regular[1]}) format("woff");
          font-weight: 300;
          font-display: "swap";
          font-style: normal;
        }

        @font-face {
          font-family: "Dubai";
          src: url(${fonts.Dubai.Bold[0]}) format("woff2"),
            url(${fonts.Dubai.Bold[1]}) format("woff");
          font-weight: 700;
          font-display: "swap";
          font-style: normal;
        }
      `}
    />
  );
};

export default connect(Fonts);
