import { fetchPosts } from '$lib/api/index.js';

export const load = async ({ fetch, params }) => {
    const { tag } = params;
    const allPosts = await fetchPosts();

    const posts = allPosts.filter((post) => post.metadata.tags.includes(tag));

    return {
        tag,
        posts
    }
}