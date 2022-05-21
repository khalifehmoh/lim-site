import React from "react";
import { connect, Head } from "frontity";
import dayjs from "dayjs";
import StyledArticle from "./styles";

const Article = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {/* Head meta can be added per component */}
      <Head>
        <title>LIM - {post.title}</title>
        <meta
          name="description"
          // content={post.excerpt.rendered}
        />
      </Head>
      <StyledArticle>
        <h2>{post.title}</h2>

        <h3>Posted: {formattedDate}</h3>
        <img src={post.image} />
        <Html2React html={post.content} />
      </StyledArticle>
    </>
  );
};

export default connect(Article);
