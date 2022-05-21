import React, { useEffect } from "react";
import Switch from "@frontity/components/switch";
import List from "./list/";
import Article from "./article/";
import Page from "./page/";
import Header from "../components/header/";
import Error from "./404/";
import { connect, Head } from "frontity";
import Loading from "../components/UI/loading/";
import Category from "./category/";
import Assesment from "../custom-pages/assesment/";
import GlobalStyles from "../styles/global";
import { StyledMain } from "./styles";
import BootstrapStyles from "../styles/bootstrap/bootstrap-styles";

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

      {/* Main content */}
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
          <List when={data.isArchive} />
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
