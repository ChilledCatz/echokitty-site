<script lang="ts">
	import { setGalleryState } from ".././state.svelte";

	let { src, thumbnail, alt, description } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="galleryImage"
	onclick={() => {
		setGalleryState(src, alt, description);
	}}
>
	<img class="thumbnail" src={thumbnail} {alt} />
</div>

<style>
	.galleryImage {
		width: 137px;
		height: 125px;
		margin: 0.5rem;
		overflow: hidden;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
	}

	.thumbnail {
		width: 100%;
		height: 100%;
		cursor: pointer;
		transition: all 0.3s;
		object-fit: cover;
	}

	.thumbnail:hover {
		z-index: 10;
		transform: scale(1.1);
	}
</style>
