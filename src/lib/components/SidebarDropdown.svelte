<script lang="ts">
    import { slide } from "svelte/transition";
    import {clickOutside} from './events/clickOutside';

    let {children, title} = $props();
    let isOpen = $state(false);

    const isMobileView = false;
</script>

<button 
    use:clickOutside
    onoutsideclick={() => {isOpen = false}}
    class="dropdown" 
    onclick={() => isOpen = !isOpen}
    tabindex={0}
>
    <div class="dropdownText">
        {title}
    </div>
    
    {#if isOpen}
    <div transition:slide={{ axis: isMobileView ? 'y' : 'x' }} class="options">
        {#each children as child}
            <a href={child.href}>
                {child.title}
            </a>
        {/each}
    </div>
    {/if}
</button>

<style>
    .dropdown {
        display: flex;
        place-content: center;
        width: 64px;
        height: 64px;
        margin-left: 6px;
        text-decoration-line: none;
        background: linear-gradient(to top, rgba(0,0,0,0) 50%, var(--pure-color) 50%);
        background-size: 100% 200%;
        background-position: right bottom;
        transition: all 0.3s ease;
        position: relative;
        color: var(--link-color);
        border: none;
        font-family: Selectric;
        font-size: medium;
    }

    .dropdown:hover {
        border-color: var(--text-color);
        background-position: left top;
        color: var(--text-color);
        cursor: pointer;
    }

    .dropdownText:hover {
        background-position: left bottom;
        color: var(--text-color);
    }

    .options {
        position: absolute;
        top: 0;
        left: calc(100% + 2vw);
        width: 64px;
        display: flex;
        flex-direction: column;
        background-color: var(--container-color);
        gap: 0.5rem;
        padding: 10px 16px;
        box-shadow: 4px 4px var(--pure-color);
    }

    .options a {
        text-decoration-line: none;
    }

    @media only screen and (max-width: 40rem) {
        .options {
            top: calc(100% + 1vh);
            left: 0;
            right: 0;
        }
    }
</style>