export async function load({ params }) {
    const post = await import(`$lib/blog/${params.post}.md`)
    const { title, description, image, alt, date, tags } = post.metadata;
    const Content = post.default;

    return {
        Content,
        title,
        description,
        image,
        alt,
        date,
        tags,
    }
}