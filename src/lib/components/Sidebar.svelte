<script lang="ts">
    import SidebarDropdown from "./SidebarDropdown.svelte";
	import SidebarLink from "./SidebarLink.svelte";

    const links = [
        { href: "/home", title: "home" },
        { href: "/blog", title: "blog" },
        { href: "/furries", title: "furries", children: [
            { href: "/furries/echo", title: "echo" },
            { href: "/furries/glade", title: "glade" }
        ] }
    ]
</script>


<nav class="sidebar">
    {#each links as link}
        {#if link.children}
            <SidebarDropdown children={link.children} title={link.title} />
        {:else}
            <SidebarLink url={link.href} title={link.title} />
        {/if}
    {/each}
</nav>

<style>
    .sidebar {
        position: fixed;
        padding: 4px;
        background-color: var(--container-color);
        width: var(--sidebar-width);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        z-index: 99;
    }

    @media screen and (max-width: 40rem) {
        .sidebar {
            width: 100vw;
            height: var(--sidebar-height);
            top: 0;
            justify-content: center;
            flex-direction: row;
            align-items: flex-start;
            z-index: 3;
            border-bottom: 2px solid var(--header-color);
        }
    }
</style>