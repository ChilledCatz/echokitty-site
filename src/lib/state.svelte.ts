export let backgroundState = $state<{
    color: string
    image: {
        src: string | null
        alt: string | null
        show: boolean
    }
}>({
    color: '#839ca9',
    image: {
        src: null,
        alt: null,
        show: false,
    },
})

export function setBackground(color: string, image: string | null) {
    backgroundState.color = color

    if (backgroundState.image.src && image) {
        backgroundState.image.show = false
        setTimeout(() => {
            backgroundState.image.show = true
            backgroundState.image.src = image
        }, 1000)
    } else if (image) {
        setTimeout(() => {
            backgroundState.image.show = true
            backgroundState.image.src = image
        }, 1000)
    } else if (image === null) {
        backgroundState.image.show = false
        setTimeout(() => {
            backgroundState.image.src = null
        }, 300)
    }
}
