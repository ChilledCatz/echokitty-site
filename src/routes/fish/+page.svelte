<script>
	import { onMount } from "svelte";
	import { bounceOut } from "svelte/easing";
	import { fade } from "svelte/transition";

    let isDisabled = $state(false);
    let showFish = $state(false);

    function fall(node) {
        return {
            duration: 1000,
            css: (t, u) => {
                const easing = bounceOut(t)
                console.log(easing)

                return `
                    transform: translate(0, ${easing * 100}px);
                `
            }
        }
    }

    const fishTrick = () => {
        const element = document.getElementById('rotate')
        
        if (!element) return;

        element.style.setProperty('transform', 'perspective(1000px) rotateX(360deg) rotateY(360deg)');
        element.style.setProperty('transition', 'all 1s');

        new Audio('/audio/tonyhawk-trick.mp3').play();

        isDisabled = true;

        setTimeout(() => {
            element.style.setProperty('transform', '')
            element.style.setProperty('transition', '')

            isDisabled = false;
        }, 1000)
    }

    onMount(() => {showFish = true})
</script>

{#if (showFish)}
    <button
        in:fade={{ delay: 2500, duration: 5000 }}
        id="rotate"
        class="rotate-box"
        title="this fish does a cool trick or a stunt perhaps"
        disabled={isDisabled}
        onclick={() => fishTrick()}
    >
        <enhanced:img
            class="fish"
            src="/static/images/goingswimingly.png" 
            alt="a fish with a tabby cat's head with the text 'it's going swimingly' over it" 
        />
    </button>
{/if}

<style>
    .rotate-box {
        position: relative;
        width: 50%;
        height: 75vh;
        transform-style: preserve-3d;
        background: unset;
        border: unset;
    }
    
    .fish {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        height: 100%; 
        object-fit: contain;
    }
</style>