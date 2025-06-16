<script lang="ts">
    import SidebarDropdown from "./SidebarDropdown.svelte";

    const links = [
        { href: "/home", title: "home" },
        { href: "/about", title: "about me" },
        { href: "/furries", title: "furries", children: [
            { href: "/furries/echo", title: "echo" },
            { href: "/furries/glade", title: "glade" }
        ] }
    ]
</script>


<div class="sidebar">
    <div class="container">
        <!-- <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/furries/echo">echo</a>
        <a href="/furries/glade">glade</a> -->
        {#each links as link}
            {#if link.children}
                <SidebarDropdown children={link.children} title={link.title} />
            {:else}
                <a href={link.href}>{link.title}</a>
            {/if}
        {/each}
    </div>
</div>

<style>
    .container {
        width: 100%;
        margin: 16px 32px;
        display: flex;
        gap: 2rem;
    }

    .sidebar {
        width: 100vw;
        height: 52px;
        z-index: 10;
        position: sticky;
        top: 0;
        left: 0;
        margin-top: -20px;
        margin-left: -8px;
        padding: 4px 0px;
        display: flex;
        background-color: #131316;
        border-bottom: 2px solid;
    }
</style>