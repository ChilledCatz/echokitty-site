<script lang="ts">
	import { onMount } from "svelte";

	// let { texts }: { texts: [] } = $props();
	const tempText = [":3", "^w^", ":3c", "hey!", "awawa", "mrrp"];

	let currentText = $state(tempText[(tempText.length * Math.random()) | 0]);

	function type(content: string) {
		return new Promise<void>((resolve) => {
			currentText = "";
			let index = 0;
			const speed = 100;

			const typing = setInterval(() => {
				currentText += content[index];
				index++;
				if (index >= content.length) {
					clearInterval(typing);
					resolve();
				}
			}, speed);
		});
	}

	function untype() {
		return new Promise<void>((resolve) => {
			let index = currentText.length - 1;
			const speed = 150;

			const untyping = setInterval(() => {
				currentText = currentText.slice(0, -1);
				index--;
				if (index < 0) {
					clearInterval(untyping);
					resolve();
				}
			}, speed);
		});
	}

	async function typeAndUntypeCycle() {
		const text = tempText[(tempText.length * Math.random()) | 0];
		
		await type(text);
		await new Promise(resolve => setTimeout(resolve, Math.random() * (5000 - 3000) + 3000));
		await untype();
		await new Promise(resolve => setTimeout(resolve, Math.random() * (1000 - 500) + 500));
		
		typeAndUntypeCycle();
	}

    onMount(() => {
        typeAndUntypeCycle();
    })
</script>

<div style="margin: 1rem 0;">
    <span class="big typed-text">{currentText}<span class="blinker">|</span></span>
</div>

<style>
    .blinker {
        color: white;
        margin: 0 -0.75rem;
        animation: blink 1.25s infinite;
    }

    .typed-text {
        background-color: blue;
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