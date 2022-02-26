import React from "react"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Header from "./header"
import Error from "./404"
import MainHead from "./head"
import { connect, Global, css, styled, Head } from "frontity"
import Loading from "./loading"
import Category from "./category"

const StyledMain = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      {/* Global styles */}
      <Global
        styles={css`
            html {
              font-family: system-ui, Verdana, Arial, sans-serif;
              direction: rtl;
            }

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}
      />

      {/* Main content */}
      <Head>
        <title>My First Frontity Theme</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Header />
      <StyledMain>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          {/* isCategory should be used here */}
          <Category when={state.router.link.startsWith('/category/')} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch>
      </StyledMain>
    </>
  )
}

export default connect(Root)