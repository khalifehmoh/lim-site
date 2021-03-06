import React, { useEffect } from "react";
import Switch from "@frontity/components/switch";
import List from "./pages/list";
import Article from "./pages/article";
import Page from "./pages/page";
import Header from "./components/header";
import Error from "./pages/404";
import { connect, Head } from "frontity";
import Loading from "./components/UI/loading";
import Category from "./pages/category";
import Assesment from "./custom-pages/assesment";

//Swiper
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
SwiperCore.use([Navigation, Pagination, A11y]);

//Styles
import GlobalStyles from "./styles/global";
import FontsStyles from "./styles/fonts";
import { StyledMain } from "./pages/styles";
import BootstrapStyles from "./styles/bootstrap/bootstrap-styles";
import SwiperStyles from "./styles/swiper/swiper-styles"; // Try moving the specifc styles to the used component only

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  // @todo: investigate sourcemap for BS
  // const addSourceMap = () => {
  //   const bsTag = document.head.querySelector('style');
  //   bsTag.textContent = bsTag.textContent + '/*# sourceMappingURL=/packages/src/bootstrap.css.map */'
  // }

  // useEffect(() => {
  //   addSourceMap()
  // }, [])

  return (
    <>
      {/* Main styles */}
      <BootstrapStyles />
      <GlobalStyles />
      <FontsStyles />
      <SwiperStyles />

      <Head>
        <title>LIM</title>
        <meta name="description" content="LIM site" />
      </Head>
      <Header />
      <StyledMain>
        <Switch>
          <Loading when={data.isFetching} />
          {/* Custom pages */}
          <Assesment when={data.isAssesment} />

          {/* Regular site pages */}
          <List when={data.isArchive} dontLazyloadFirstCard />
          {/* isCategory should be used here */}
          {/* <Category when={data.isCategory} /> */}
          <Category when={state.router.link.startsWith("/category/")} />
          <Article when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch>
      </StyledMain>
    </>
  );
};

export default connect(Root);
