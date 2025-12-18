<script lang="ts">
	import { goto } from "$app/navigation";

    let { url, title, icon } = $props();
</script>

<button class="link" onclick={() => goto(url)}>
    <div class="link-content">
        <img src={icon} alt="icon for {title}">
        {title}
    </div>
</button>

<style>
    .link {
        display: flex;
        place-content: center;
        width: 64px;
        height: 64px;
        margin-left: 6px;
        color: var(--link-color);
        background: linear-gradient(to left, rgba(0,0,0,0) 50%, var(--pure-color) 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease;
        border: none;
        font-family: Selectric;
        font-size: medium;
    }

    .link:hover {
        background-position: left bottom;
        color: white;
        cursor: pointer;
    }

    .link-content {
        display: flex; 
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }
</style>