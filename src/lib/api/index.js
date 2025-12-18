export const fetchPosts = () => {
    const allPostFiles = import.meta.glob('$lib/blog/*.md', { eager: true });
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = iterablePostFiles.map(([path, resolver]) => {
        const postPath = path.slice(8, -3);

        return {
            metadata: resolver.metadata,
            path: postPath
        }
    })

    return allPosts;
}