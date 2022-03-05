import React, { useEffect } from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Story from "./UI/story"
import { Col, Row } from "react-bootstrap"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <section>
            <Row xs={1} md={2} lg={3} className="g-4">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id];
                    return (
                        <Col>
                            <Story data={post} />
                        </Col>
                    )
                })}
            </Row>
        </section>
    )
}

export default connect(List)