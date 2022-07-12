import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import { getPostsFromCategory } from "../../utils";
import StoriesGrid from "../../components/stories-grid";

const Category = ({ state, actions }) => {
  // This is a workaround and it has to be done another way
  const [data, setData] = useState([]);
  const categorySlug = state.router.link.replace(/(\/)?(category)?/g, "");

  useEffect(() => {
    const updateState = async () => {
      await actions.source.fetch(`/category/${categorySlug}/`);
      setData(getPostsFromCategory(state.source, categorySlug));
    };
    updateState();
  }, []);
  if (data) {
    // posts from that category
    const posts = data.map(({ type, id }) => state.source[type][id]);
    return (
      <section className="py-5">
        <StoriesGrid state={state} items={posts} />
      </section>
    );
  }
  return null;
};

export default connect(Category);
