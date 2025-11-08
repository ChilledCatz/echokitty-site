<script lang="ts">
    import SidebarDropdown from "./SidebarDropdown.svelte";
	import SidebarLink from "./SidebarLink.svelte";

    const links = [
        { href: "/home", title: "home" },
        { href: "/about", title: "about me" },
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
            <!-- <a href={link.href}>{link.title}</a> -->
            <SidebarLink url={link.href} title={link.title} />
        {/if}
    {/each}
</nav>

<style>
    .sidebar {
        position: sticky;
        padding: 4px;
        background-color: #131316;
        width: 80px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
</style>