<script lang="ts">
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
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/furries/echo">echo</a>
        <a href="/furries/glade">glade</a>
    </div>
</div>

<style>
    .container {
        width: 100%;
        margin: 16px 32px;
        display: flex;
        justify-content: space-between;
    }

    .sidebar {
        width: 100vw;
        height: 5%;
        z-index: 20;
        position: fixed;
        top: 0;
        left: 0;
        padding: 4px 0px;
        display: flex;
        background-color: #131316;
        border-bottom: 2px solid;
    }
</style>