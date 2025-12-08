export const fetchPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                metadata,
                path: postPath
            }
        })
    )

    return allPosts;
}

export const fetchHighlightPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                metadata,
                path: postPath
            }
        })
    )

    const highlightPosts = allPosts.filter((post) => post.metadata.isHighlight);

    return highlightPosts;
}