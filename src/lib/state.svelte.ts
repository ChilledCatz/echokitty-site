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

export function setTheme(themeName: 'teal' | 'blue' | 'woodlands') {
    let theme = { backgroundColor: '#101410', containerColor: '#252924', headerColor: '#9ed49d', textColor: 'white', linkColor: '#9ed49d', pureColor: '#1f4d53' };

    switch (themeName) {
        case 'woodlands':
            theme = { backgroundColor: '#101410', containerColor: '#252924', headerColor: '#9ed49d', textColor: 'white', linkColor: '#9ed49d', pureColor: '#1f4d53' }
            break;
        case 'teal':
            theme = { backgroundColor: '#87a985', containerColor: '#241827', headerColor: 'white', textColor: 'white', linkColor: '#ef476f', pureColor: 'green' }
            break;
        case 'blue':
            theme = { backgroundColor: '#6d838e', containerColor: '#131316', headerColor: 'white', textColor: 'white', linkColor: '#0090e0', pureColor: 'blue' }
            break;
    }

    onMount(() => {
        document.body.style.setProperty('--background-color', theme.backgroundColor)
        document.body.style.setProperty('--container-color', theme.containerColor)
        document.body.style.setProperty('--header-color', theme.headerColor)
        document.body.style.setProperty('--text-color', theme.textColor)
        document.body.style.setProperty('--link-color', theme.linkColor)
        document.body.style.setProperty('--pure-color', theme.pureColor)
    })
}

export function setGalleryState(src: string | null, alt: string | null, description: string | null) {
    galleryState.src = src
    galleryState.alt = alt
    galleryState.description = description
}
