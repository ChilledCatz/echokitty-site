<script lang="ts">
	import { setGalleryState } from ".././state.svelte";

	let { src, thumbnail, alt, description } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="galleryItem">
	<div 
		class="galleryImage"
		onclick={() => {
			setGalleryState(src, alt, description);
		}}
	>
		<enhanced:img class="thumbnail" src={thumbnail} {alt} />
	</div>
	<div class="galleryShadow"></div>
</div>

<style>
	.galleryItem {
		position: relative;
	}

	.galleryImage {
		position: relative;
		width: 116%;
		height: 125px;
		margin: 6px;
		transition: all 0.3s;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
		z-index: 1;
	}

	.thumbnail {
		width: 100%;
		height: 100%;
		z-index: 1;
		cursor: pointer;
		transition: all 0.3s;
		object-fit: cover;
		object-position: 50% 20%;
	}

	.galleryShadow {
		position: absolute;
		top: 6px;
		left: 6px;
		width: 116%;
		height: 125px;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
		z-index: 0;
		background-color: var(--pure-color);
	}

	.thumbnail:hover {
		transform: scale(1.1);
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
	}

	.galleryImage:hover {
		transform: translate(-4px, -8px);
	}
</style>
