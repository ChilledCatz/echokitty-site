import { onMount } from 'svelte';

interface BackgroundStateProps {
    color: string;
}

interface GalleryStateProps {
    src: string | null,
    alt: string | null,
    description: string | null
}

export let backgroundState = $state<BackgroundStateProps>(
    {
        color: '#839ca9',
    }
)

export let galleryState = $state<GalleryStateProps>(
    {
        src: null, 
        alt: null, 
        description: null
    }
)

export function setBackground(color: string) {
    onMount(() => {
        document.body.style.setProperty('background-color', color)
    })
}

export function setGalleryState(src: string | null, alt: string | null, description: string | null) {
    galleryState.src = src
    galleryState.alt = alt
    galleryState.description = description
}
