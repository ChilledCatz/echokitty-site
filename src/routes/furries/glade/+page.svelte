<script lang="ts">
    import { setBackground } from '$lib/state.svelte'
    import IMG_3332 from '$lib/assets/pitaya/IMG_3332.png?enhanced'
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';

    setBackground('#87a985')
</script>

<svelte:head>
    <title>glade</title>
</svelte:head>

<BackgroundImage src={IMG_3332} alt="please pleaseplease take this thing off my screen" />

<div class="characterSheet">
    <h1>glade</h1>
</div>

<style>
    .characterSheet {
        width: 50%;
        background-color: #131316;
        border: 2px solid;
        padding: 12px;
    }

    @media only screen and (max-width: 535px) {
        .characterSheet {
            width: 100%;
        }
    }
</style>