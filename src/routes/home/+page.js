import { fetchPosts } from '$lib/api/index.js';

export const load = async ({ fetch }) => {
    const response = fetchPosts();
    const posts = await response;

    return { posts };
}