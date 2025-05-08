<script lang="ts">
    import { setBackground } from "$lib/state.svelte";
    import Gallery from "$lib/Gallery.svelte";
    import coverImg from "$lib/assets/echo/coverImg.png"
    import echoMid_bf from "$lib/assets/echo/echoMid_bf.png"
    import echoMid_bfThumbnail from "$lib/assets/echo/thumbnails/echoMid_bfThumbnail.png"

    const items = [
        {
            src: echoMid_bf,
            thumbnail: echoMid_bfThumbnail,
            alt: "a placeholder alt, sorry",
            description: "a placeholder description"
        }   
    ]

    setBackground('#6d838e', coverImg)
</script>

<svelte:head>
    <title>echo</title>
</svelte:head>

<h1>echo</h1>
<Gallery items={items} />
