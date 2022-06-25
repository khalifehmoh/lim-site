import { Global, css, styled } from "frontity";
import swiper from "swiper/swiper.min.css";
import navigation from "swiper/modules/navigation/navigation.min.css";
import pagination from "swiper/modules/pagination/pagination.min.css";
import { fixFirstChildErrorCss } from "../../utils";

const mainStylesArray = [swiper, navigation, pagination];

const CustomStyles = () => {
  return <Global styles={css``} />;
};

const SwiperStyles = () => {
  return (
    <>
      {mainStylesArray.map((sheet, i) => (
        <Global key={i} styles={css(fixFirstChildErrorCss(sheet))} />
      ))}
      <CustomStyles />;
    </>
  );
};

export default SwiperStyles;
