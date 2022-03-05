import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { getPostsFromCategory } from "../utils";
import { Col, Row } from "react-bootstrap";
import Story from "./UI/story";

const Category = ({ state, actions }) => {
    // This is a workaround and it has to be done another way
    const [data, setData] = useState([]);
    const categorySlug = state.router.link.replace(/(\/)?(category)?/g, '');

    useEffect(() => {
        const updateState = async () => {
            await actions.source.fetch(`/category/${categorySlug}/`);
            setData(getPostsFromCategory(state.source, categorySlug));
        }
        updateState()
    }, []);
    if (data) {
        // posts from that category
        const posts = data.map(({ type, id }) => state.source[type][id]);
        return (
            <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {posts.map((item) => {
                        const post = state.source[item.type][item.id];
                        return (
                            <Col>
                                <Story data={post} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }
    return null
}

export default connect(Category)