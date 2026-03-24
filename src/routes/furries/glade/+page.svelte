<script lang="ts">
    import { setTheme } from '$lib/state.svelte'
    import * as images from '$lib/assets/glade/index';
	import BackgroundImage from '$lib/components/BackgroundImage.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
	import Link from '$lib/components/Link.svelte';

    const items: { src: any; thumbnail: any; alt: string; description: { text: string, artist: string, href: string } }[] =
        [
            {
                src: images.glade_necapinx,
                thumbnail: images.glade_necapinx_thumbnail,
                alt: "a unicorned dragon with brown fur flowing to a mossy green at its paws and snout. it is adorned with several golden pieces of jewelry, with nails to match, and crimson cloth wraps in its mane and around its horn",
                description: {
                    text: 'the adopt that kicked off the gay dragon living in my brain!',
                    artist: 'necapinx',
                    href: 'https://pinxsite.carrd.co/'
                }
            },
            {
                src: images.gladeSunset_necapinx,
                thumbnail: images.gladeSunset_necapinx_thumbnail,
                alt: "glade, standing in a field of tall grass against a cloudy sunset. its eyes are closed and its snout is held up high",
                description: {
                    text: 'a ych i got later down the line ^^',
                    artist: 'necapinx',
                    href: 'https://pinxsite.carrd.co/'
                }
            },
            {
                src: images.glade_kr00bs,
                thumbnail: images.glade_kr00bs,
                alt: "glade, looking off to the side and holding a regal red cape together using one of its paws. ",
                description: {
                    text: 'this is such a perfect fit for someone like kr00bs, really really adore this one',
                    artist: 'kr00bs',
                    href: 'https://kr00bs.com/'
                }
            },
        ];

    setTheme('teal')
</script>

<svelte:head>
    <title>glade</title>
</svelte:head>

<section class="container characterSheet">
    <h1 class="big" style="margin-bottom: -0.25rem;">glade</h1>
    <i>/ glade | it/she | 215cm /</i>
    <hr>
    <p>
      glade's a friend of echo. it's more loud and out there than her and likes to tease her for being a bit too much of a shut-in at times.
      it likes playing bass and baking, somehow knows too much about thrifting clothes and should not be trusted with treats or snacks :3
    </p>
    <p>
      i got glade as an adopt from <span><Link href="https://pinxsite.carrd.co/" target="_blank">necapinx</Link></span>! 
      so far this is all of the art i have to show for her... i'd love to get some more commissioned though ^^  
    </p>
    <Gallery items={items} />
</section>