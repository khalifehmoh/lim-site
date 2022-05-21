import React from "react";
import { connect } from "frontity";
import StoriesGrid from "../../components/stories-grid";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  const items = data.items;

  return (
    <section className="py-5">
      <StoriesGrid state={state} items={items} />
    </section>
  );
};

export default connect(List);
