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
	<enhanced:img class="thumbnail" src={thumbnail} {alt} />
</div>

<style>
	.galleryImage {
		width: 116%;
		height: 125px;
		margin: 6px;
		overflow: hidden;
		transition: all 0.3s;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
	}

	.thumbnail {
		width: 100%;
		height: 100%;
		z-index: 10;
		cursor: pointer;
		transition: all 0.3s;
		object-fit: cover;
	}

	.thumbnail:hover {
		transform: scale(1.1);
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
	}

	.galleryImage:hover {
		transform: translate(-4px, -8px);
	}
</style>
