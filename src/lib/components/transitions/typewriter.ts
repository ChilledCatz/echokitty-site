import type { TransitionConfig } from "svelte/transition";

export default function typewriter(node: HTMLElement, { speed = 1 }): TransitionConfig {
	const text = node.textContent;

    if (!text) return {
		duration: 1,
		tick: (t) => {
			node.textContent = ""
		} 
	};
    
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i)
		}
	}
}