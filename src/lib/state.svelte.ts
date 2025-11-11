import { onMount } from 'svelte';

interface BackgroundStateProps {
    image: {
        src: string | null
        alt: string | null
        show: boolean
        hasImage: boolean
    }
}

interface GalleryStateProps {
    src: string | null,
    alt: string | null,
    description: string | null
}

export let backgroundState = $state<BackgroundStateProps>(
    {
        image: {
            src: null,
            alt: null,
            show: false,
            hasImage: false
        },
    }
)

export let galleryState = $state<GalleryStateProps>(
    {
        src: null, 
        alt: null, 
        description: null
    }
)

export function setBackground(color: string, image: string | null) {
    onMount(() => {
        document.body.style.setProperty('background-color', color)
    })

    if (backgroundState.image.src && image) {
        backgroundState.image.show = false;
        backgroundState.image.hasImage = true;
        
        setTimeout(() => {
            backgroundState.image.show = true
            backgroundState.image.src = image
        }, 1000)
    } else if (image) {
        backgroundState.image.hasImage = true;

        setTimeout(() => {
            backgroundState.image.show = true
            backgroundState.image.src = image
        }, 1000)
    } else if (image === null) {
        backgroundState.image.show = false;
        backgroundState.image.hasImage = false;

        setTimeout(() => {
            backgroundState.image.src = null
        }, 300)
    }
}

export function setGalleryState(src: string | null, alt: string | null, description: string | null) {
    galleryState.src = src
    galleryState.alt = alt
    galleryState.description = description
}
