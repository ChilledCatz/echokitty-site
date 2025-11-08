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
        {#each links as link}
            {#if link.children}
                <SidebarDropdown children={link.children} title={link.title} />
            {:else}
                <a class="navlink" href={link.href}>{link.title}</a>
            {/if}
        {/each}
    </div>
</div>

<style>
    .sidebar {
        position: absolute;
        top: 0;
        width: 100%;
        margin-left: -8px;
        background-color: #131316;
        border-bottom: 2px solid;
    }

    .container {
        display: flex;
        justify-content: space-around;
        padding: 8px;
    }

    .navlink {
        text-decoration-line: none;
        background: linear-gradient(to left, rgba(0,0,0,0) 50%, blue 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        padding: 12px 24px;
        transition: all 0.3s ease;
    }

    .navlink:hover {
        background-position: left bottom;
        color: white;
    }
</style>