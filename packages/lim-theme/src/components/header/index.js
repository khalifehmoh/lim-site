import React from "react";
import Link from "@frontity/components/link";
import { connect } from "frontity";
import { Button } from "react-bootstrap";
import { StyledHeader, StyledHeaderContent, StyledMenu } from "./styles";

const Menu = () => {
  return (
    <StyledMenu>
      <Link link="/">Home</Link>
      <Link link="/page/2">More posts</Link>
      <Link link="/category/brain-games">Brain games</Link>
      <Link link="/أفضل-10-جامعات-في-العالم-2/">Post</Link>
    </StyledMenu>
  );
};

const Header = ({ state, actions }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <h1>لوك ان مينا جديد جديد</h1>
        {state.theme.isUrlVisible ? (
          <>
            <p>Current df: {state.router.link}</p>{" "}
            <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
          </>
        ) : (
          <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
        )}
        <Menu />
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default connect(Header);
