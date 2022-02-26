export const getPostsFromCategory = ({ post }, categorySlug) =>
    Object.keys(post)
        .map(postID => post[postID])
        .filter(({ terms }) => terms.some(category => categorySlug === category.slug))