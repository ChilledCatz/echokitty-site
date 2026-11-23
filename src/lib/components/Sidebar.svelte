<script lang="ts">
    import { clickOutside } from "./events/clickOutside";
    import { page } from "$app/state";

    const links = [
        { href: "/home", title: "home", icon: '/images/svg/home.svg' },
        { href: "/things", title: "stuff" },
        { href: "/blog", title: "blog", icon: '/images/svg/article.svg' },
        { href: "/furries", title: "furries", icon: '/images/svg/paw.svg', children: [
            { href: "/furries/echo", title: "echo" },
            { href: "/furries/glade", title: "glade" }
        ] }
    ]

    const isCurrent = (href: string) => page.url.pathname.includes(href);
    const currentStyle = "text-decoration: underline dotted var(--text-color) 2px;"

    let openDropdown: string|null = $state(null);
</script>

<div class="background-invert"></div>
<nav class="sidebar" style="grid-template-columns: repeat({links.length}, 1fr);">
    {#each links as link}
        {#if (!link.children)}
            <div class="link">
                <a 
                    href={link.href} 
                    aria-current={isCurrent(link.href)}
                    style={isCurrent(link.href) ? currentStyle : ""}
                >    
                    {link.title}
                </a>
            </div>
        {:else}
            <button
                use:clickOutside
                onoutsideclick={ () => {openDropdown = null} } 
                class="link dropdown"
                style={isCurrent(link.href) ? currentStyle : ""}
                onclick={() => {
                    if (openDropdown) {
                        openDropdown = null;
                    } else openDropdown = link.title;
                }}
                tabindex={0}
            >
                <span class="dropdown-text">{link.title}</span>
                {#if (openDropdown === link.title)}
                    <div class="dropdown-options">
                        {#each link.children as child}
                            <a 
                                class="dropdown-option" 
                                href={child.href}
                                style={isCurrent(child.href) ? currentStyle : ""}
                            >
                                {child.title}
                            </a>
                        {/each}
                    </div>
                {/if}
            </button>
        {/if}
    {/each}
</nav>

<style>
    .background-invert {
        position: fixed;
        top:0;
        width: 100vw;
        height: 4em;
        filter: invert();
        background-color: var(--background-color);
        z-index: -99;
    }

    .sidebar {
        position: fixed; 
        top: 0;
        width: 100vw;
        height: 4em;
        display: grid;
        z-index: 99;
        background: linear-gradient(var(--background-color), transparent);
        backdrop-filter: invert();
    }

    a, .dropdown-text {
        color: var(--text-color);
        text-decoration: none;
        background-color: var(--background-color);
        padding: 0.25rem 1rem;
    }
        
    .link {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        font-family: Agave;
        width: 100%;
        border: none;
        background: none;
        transition: all ease-in-out 0.1s;
    }

    .dropdown {
        position: relative;
    }

    .dropdown-options {
        position: absolute;
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        gap: 0.5rem;
        top: 4rem;
        left: 0;
        right: 0;

        .dropdown-option {
            background-color: var(--background-color);
            display: block;
            padding: 0.25rem 1rem;
        }
    }
</style>