<script lang="ts">
    let {children, title} = $props();

    let isOpen = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<button onclick={() => isOpen = true}>
    {title}
</button>

{#if isOpen === true}
    <div class="options">
        {#each children as child}
            <a href={child.href}>{child.title}</a>
        {/each}
    </div>
{/if}

<style>
    .options {
        display: flex;
        flex-direction: column;
        background-color: #131316;
        border: 2px solid;
        gap: 0.5rem;
    }
</style>