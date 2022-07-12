export const getPostsFromCategory = ({ post }, categorySlug) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ terms }) =>
      terms.some((category) => categorySlug === category.slug)
    );

// fix warning: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
export const fixFirstChildErrorCss = (css) => {
  const nthChildToNthChildType = (css) =>
    css.replace(/\:nth\-child/g, `:nth-type`);
  const firstChildToFirstOfType = (css) =>
    css.replace(/\:first\-child/g, `:first-of-type`);
  const nthLastChildToNthLastChildType = (css) =>
    css.replace(/\:nth\-last\-child/g, `:nth-last-of-type`);

  return nthLastChildToNthLastChildType(
    firstChildToFirstOfType(nthChildToNthChildType(css))
  );
};
