<script lang="ts">
    import { setTheme } from '$lib/state.svelte'
    import IMG_3332 from '$lib/assets/pitaya/IMG_3332.png?enhanced'
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';

    setTheme('teal')
</script>

<svelte:head>
    <title>glade</title>
</svelte:head>

<BackgroundImage src={IMG_3332} alt="please pleaseplease take this thing off my screen" />

<section class="container" style="width: 50%;">
    <h1>glade</h1>
</section>