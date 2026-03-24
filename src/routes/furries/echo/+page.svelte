<script lang="ts">
    import { setTheme } from "$lib/state.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
    import * as images from "$lib/assets/echo/index";
	import BackgroundImage from "$lib/components/BackgroundImage.svelte";

    const items: { src: any; thumbnail: any; alt: string; description: any }[] =
        [
            {
                src: images.refSheet,
                thumbnail: images.refSheetThumbnail,
                alt: "a ref sheet of echo, a gray cat with a dark mullet and nebulae for eyes.",
                description: {
                    text: 'the most recent ref sheet, i still have to update its text ^^"',
                    artist: 'mid_bf',
                    href: 'https://linktr.ee/mid_bf'
                }
            },
            {
                src: images.room,
                thumbnail: images.roomThumbnail,
                alt: "an commission of echo in a cluttered room, holding a jazzmaster guitar.",
                description: {
                    artist: 'tiny.canon',
                    href: 'https://www.instagram.com/tiny.canon/'
                }
            },
            {
                src: images.tea,
                thumbnail: images.teaThumbnail,
                alt: "black and white art of echo. she's sitting with her legs crossed on a pillow, looking at the viewer with a cup of tea in her paws.",
                description: {
                    artist: 'twistcmyk',
                    href: 'https://bsky.app/profile/twist.dog/'
                }
            },
            {
                src: images.eye,
                thumbnail: images.eyeThumbnail,
                alt: "a closeup of echo's eye, showing a starry nebula in place of a normal eye.",
                description: {
                    artist: 'hr_bananabird',
                    href: 'https://hr-bananabird.carrd.co/'
                }
            },
            {
                src: images.magazine,
                thumbnail: images.magazineThumbnail,
                alt: "art of echo, styled like a magazine. she's posing for the photo with her guitar on her lap, holding it diagonally at the neck and body respectively.",
                description: {
                    artist: 'necapinx',
                    href: 'https://pinxsite.carrd.co/'
                }
            },
            {
                src: images.cry,
                thumbnail: images.cryThumbnail,
                alt: "echo, looking at the camera with her paw held up towards her chin. her starry eyes seem to leak out and fall up like rain",
                description: {
                    artist: 'swollenbabyfat',
                    href: 'https://linktr.ee/swollenbabyfat'
                }
            },
        ];
    
    setTheme('blue');
</script>

<svelte:head>
    <title>echo</title>
</svelte:head>

<BackgroundImage src={images.coverImg} alt="pixel art of echo standing in a field of tall grass against a starry night sky. the north star seems to shine down over part of her snout" />

<section class="container characterSheet">
    <h1 class="big" style="margin-bottom: -0.25rem;">echo</h1>
    <i>/ echo orion | she/her | 174cm /</i>
    <hr />
    <p>
        echo is my fursona! she's a quiet nebelung cat with nebulae for eyes, 
        which change depending on her mood. she loves ambient music, her guitar 
        and tranquil moments with a cup of tea or coffee. although, if she has the
        energy for it, she's willing to be more outgoing ^^
    </p>
    <p>
        though i provide reference images on this page, feel free to have your
        own take on her. i love seeing artists have a different spin on her
        character, as long as she's still recognizable and still a trans woman
        :3
    </p>
    <hr />
    <Gallery {items} />
</section>