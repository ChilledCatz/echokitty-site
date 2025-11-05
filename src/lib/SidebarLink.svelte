<script lang="ts">
	import { goto } from "$app/navigation";

    let { url, title } = $props();
</script>

<button class="link" onclick={() => goto(url)}>
    {title}
</button>

<style>
    .link {
        width: 100%;
        height: 80px;
    }
</style>