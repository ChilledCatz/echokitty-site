<script lang="ts">
    interface PostInterface {
        post: {
            path: string,
            metadata: {
                title: string,
                description: string,
                date: string,
                image: any,
                tags: [],
            }
        }
    }

    let { post }: PostInterface = $props();
</script>

<article class="container">
    <div class="thumbnail-grid">
        <a class="thumbnail" href={post.path} title="link to post">
            <img class="thumbnail-image" src={post.metadata.image} alt="thumbnail image for {post.metadata.title}" />
        </a>
        <div class="title">{post.metadata.title}</div>
        {#each post.metadata.tags as tag}
            <a class="tag" href="/blog/category/{tag}">{tag}</a>
        {/each}
    </div>
    <div class="description">{post.metadata.description}</div>
</article>

<style>
    .container {
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: #131313;
        border-bottom: 3px dotted white;
        text-decoration: none;
        color: unset;
        width: 100%;
        height: 12vh;
        overflow: hidden;
        padding-bottom: 15px;
    }

    .thumbnail {
        float: left;
        width: 50%;
        height: 12vh;
        margin-right: unset;
        clip-path: polygon(0 0, 77.5% 0, 100% 100%, 0 100%);
        shape-outside: polygon(0 0, 77.5% 0, 100% 100%, 0 100%);
    }

    .thumbnail-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .title {
        font-size: larger;
        font-weight: bolder;
        margin-bottom: 4px;
        padding-left: 45%;
    }

    .tag {
        color: white;
        text-decoration: none;
        font-size: smaller;
        text-align: center;
        max-width: 40%;
        margin: 4px; 
        padding: 4px 8px;  
        background-color: gray; 
        display: inline-block;
        transition: all 0.3s;
    }

    .tag:hover{
        background-color: blue;
    }

    .description {
        opacity: 75%;
        height: 100%;
        font-style: italic;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>