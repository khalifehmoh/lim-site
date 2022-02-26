import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../utils";

const Category = ({ state, actions }) => {
    // This is a workaround and it has to be done another way
    const [data, setData] = useState([]);
    // const data = state.source.get(state.router.link)
    // actions.source.fetch(`/category/learn-languages/`).then(res => {
    //     console.log(res)
    //     // res.json().then(r => console.log(r))
    // })

    useEffect(() => {
        const updateState = async () => {
            await actions.source.fetch("/category/learn-languages/");
            setData(getPostsFromCategory(state.source, 'learn-languages'));
        }
        updateState()
    }, []);
    if (data) {
        // the category entity
        // const category = state.source.category[data.id];

        // posts from that category
        const posts = data.map(({ type, id }) => state.source[type][id]);
        return (
            <>
                {/* <h1>{category.name}</h1> */}
                {posts.map((p) => (
                    <a href={p.link}>{p.title}<br></br></a>
                ))}
            </>
        );
    }
    return null
}

export default connect(Category)