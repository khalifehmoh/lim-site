import React from "react"
import Link from "@frontity/components/link"
import { connect, styled } from "frontity"
import { Button } from "react-bootstrap"

const StyledHeader = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: maroon;

    h1 {
        color: #4a4a4a;
    }
`

const StyledHeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Menu = () => {
    return (
        <StyledMenu>
            <Link link="/">Home</Link>
            <Link link="/page/2">More posts</Link>
            <Link link="/category/brain-games">Brain games</Link>
            <Link link="/أفضل-10-جامعات-في-العالم-2/">Post</Link>
        </StyledMenu>
    )
}

const Header = ({ state, actions }) => {
    return (
        <StyledHeader>
            <StyledHeaderContent>
                <h1>لوك ان مينا جديد جديد</h1>
                {state.theme.isUrlVisible
                    ? <><p>Current df: {state.router.link}</p> <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></>
                    : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
                }
                <Menu />
            </StyledHeaderContent>
        </StyledHeader>
    )
}

export default connect(Header)