<script lang="ts">
	import { onDestroy, onMount } from "svelte";

    let { tags, multiline = false } = $props();

    let tagContainer: HTMLDivElement;
    let overflowingTags: any[] | undefined | null = $state();
    let resizeObserver: ResizeObserver;
    let showExtraTags = $state(false);

    const checkOverflowingTags = () => {
        if (!tagContainer) return;

        const tags = tagContainer.children;

        overflowingTags = [...tags].filter((tag) => 
            // @ts-ignore (they do have these props and typing them so just makes ts yell at me more...)
                (tag.offsetTop - tagContainer.offsetTop) > tagContainer.offsetHeight
        );
    };

    onMount(() => {
        resizeObserver = new ResizeObserver(checkOverflowingTags);
        resizeObserver.observe(tagContainer);

        checkOverflowingTags();
    })

    onDestroy(() => {
        resizeObserver?.disconnect();
    })
</script>

<div 
    class="tag-container"
    style={multiline ? 'overflow: show;' : 'overflow: hidden; height: calc(1rem + 16px)'} 
    bind:this={tagContainer}
>
    {#each tags as tag}
        <a class="tag" href="/blog/category/{tag}">{tag}</a>
    {/each}
</div>
{#if multiline === false && overflowingTags && overflowingTags.length > 0}
    <button 
        class="tag show-tags" 
        style={showExtraTags ? 'background-color: blue;' : ''}
        onclick={() => {showExtraTags = !showExtraTags}}
    >
        + {overflowingTags.length}
    </button>
{/if}

<style>
    .tag-container {
        margin-bottom: 8px;
    }

    .tag {
        --tag-width: calc(100% - 8px);
        z-index: 10;
        color: white;
        border: none;
        text-decoration: none;
        font-size: 0.75rem;
        text-align: center;
        margin: 4px 0px; 
        padding: 4px 16px;  
        background-color: gray; 
        display: inline-block;
        transition: all 0.3s;
        cursor: pointer;
        mask: linear-gradient(-77.5deg, transparent 8px, black 8px, black var(--tag-width), transparent var(--tag-width));
    }

    .tag:hover{
        background-color: blue;
    }
</style>