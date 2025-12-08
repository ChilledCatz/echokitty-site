<script lang="ts">
    interface PostInterface {
        post: {
            path: string,
            metadata: {
                title: string,
                description: string,
                date: string,
                tags: [],
            }
        }
    }

    let { post: postData }: PostInterface = $props();
</script>
  
<a class="post__container" href={postData.path}>
    <h2 class="post__title">{postData.metadata.title}</h2>
    <div class="post__description">{postData.metadata.description}</div>
    <div class="post__thumbnail">
        <div class="post__thumbnail_gradient"></div>
        <div class="post__thumbnail_image"></div>
    </div>
</a>

<style>
    .post__container {
        display: flex;
        justify-content: space-between;
        background-color: #131313;
        border: 2px solid white;
        padding: 24px;
        text-decoration: none;
        color: unset;
        width: 100%;
        height: 128px;
    }

    .post__description {
        justify-self: flex-start;
        max-width: 50%;
        opacity: 75%;
        font-style: italic;
        shape-outside: polygon(25% 0, 100% 0, 75% 100%, 0 100%)
    }

    .post__thumbnail { 
        position: relative;
        min-width: 20%;
        width: 33%; 
        margin: -24px;
        margin-left: unset;
    }

    .post__thumbnail_gradient { 
        width: 128px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #131313;
        clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
    }

    .post__thumbnail_image {
        background-color: blue; 
        width: 100%;
        height: 100%;
    }
</style>