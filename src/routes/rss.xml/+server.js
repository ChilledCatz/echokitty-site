export const prerender = true;

import { fetchPosts } from '$lib/api/index.js';

export const GET = async ({ fetch, url }) => {
    const posts = fetchPosts();

    const headers = {
        'Cache-Control': `max-age=0, s-max-age=600`,
        'Content-Type': 'application/xml; charset=utf-8',
    };

    const escapeXml = (string) => 
        String(string)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&apos;');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <atom:link href="https://oestrogeen.gratis/rss.xml" rel="self" type="application/rss+xml" />
                <link>https://oestrogeen.gratis/</link>
                <title>${escapeXml("kat's blog")}</title>
                <author>${escapeXml('kat')}</author>
                <description>${escapeXml("i write about stuff i care about")}</description>
                <updated>${new Date().toISOString()}</updated>
                ${posts.map((post) => `
                    <item>
                        <guid>${'https://oestrogeen.gratis' + post.path}</guid>
                        <link>${'https://oestrogeen.gratis' + post.path}</link>
                        <title>${escapeXml(post.metadata.title)}</title>
                        <image>
                            <url>${'https://oestrogeen.gratis' + post.metadata.image}</url>
                        </image>
                        <description>${escapeXml(post.metadata.description)}</description>
                        <pubDate>${new Date(post.metadata.date).toLocaleDateString("en-GB")}</pubDate>
                    </item>
                `).join('\n')}
            </channel>
        </rss>`;

    return new Response(xml, { headers })
}