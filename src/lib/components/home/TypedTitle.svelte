<script lang="ts">
	import { onMount } from "svelte";
	import typewriter from "../transitions/typewriter";
	import selectAndDelete from "../transitions/selectAndDelete";

	let { texts }: { texts: string[] } = $props();

	let currentText = $state(texts[(texts.length * Math.random()) | 0]);
	let isVisible = $state(true);
	
	function randomDelete(node: HTMLElement) {
		if (Math.random() > 0.75) {
			return selectAndDelete(node, { delay: 0, duration: 500 })
		} else return typewriter(node, {speed: 0.5})
	}

    onMount(() => {
		setInterval(() => {
			isVisible = !isVisible;

			if (!isVisible) {
				currentText = texts[(texts.length * Math.random()) | 0]
			}
		}, Math.random() * (5000 - 2000) + 2000)
    })
</script>

<div style="display: flex; align-items: baseline; height: 6rem;">
	{#if (isVisible)}
		<h1 in:typewriter={{ speed: 0.75 }} out:randomDelete class="big typed-text">{currentText}</h1>
	{/if}
	<span class="big blinker">|</span>
</div>

<style>
    .blinker {
        color: white;
        margin: 0 -1rem;
        animation: blink 1s infinite;
    }

    .big {
        font-size: 400%;
    }

    @keyframes blink {
        0%, 50% {
            opacity: 100%;
        }
        51%, 100% {
            opacity: 0%;
        }
    }
</style>