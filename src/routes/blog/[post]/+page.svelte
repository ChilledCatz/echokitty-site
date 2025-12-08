<script lang="ts">
    export let data;
    const { title, date, Content } = data;
</script>

<div class="article_wrapper">
    <article>
        <h1>{title}</h1>
        <p>published on: {date}</p>
        <Content />
    </article>
</div>

<style>
    .article_wrapper {
        display: flex;
        justify-content: center;
    }

    article {
        width: 75%;
        background-color: #131313;
        border: 2px solid white;
        padding: 12px 24px;
    }
</style>