import type { TransitionConfig } from "svelte/transition";

export default function selectAndDelete(node: HTMLElement, { delay = 0, duration = 1000 }): TransitionConfig {
    return {
        duration,
        tick: (t, u) => (t <= 0.1) && (node.textContent = null),
        css: (t) => `background-color: var(--container-color); filter: invert(1);`
    }
}