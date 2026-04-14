<script lang="ts">
    let { src, title, artist } = $props();

    let time = $state(0);
    let duration = $state(0);
    let paused = $state(true);

    function formatToTime(time: number) {
        if (isNaN(time)) return '...';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
</script>

<div class="player">
    <audio
        {src}
        bind:currentTime={time}
        bind:duration
        bind:paused
        onended={() => {
            time = 0;
        }}
    ></audio>

    <button 
        class="playbutton"
        aria-label={paused ? 'play' : 'pause'} 
        onclick={() => paused = !paused}
    >
        {paused ? 'play' : 'pause'}
    </button>

    <div class="player-info">
        <div class="song-info">
            <span>{title}</span>
            /
            <span>{artist}</span>
        </div>
    
        <!-- thank u https://svelte.dev/tutorial/svelte/media-elements -->
        <div 
            class="scrubber"
            onpointerdown={event => {
                const div = event.currentTarget;

                function seek() {
                    const { left, width } = div.getBoundingClientRect();

                    let position = (event.clientX - left) / width;
                    if (position < 0) position = 0;
                    if (position > 1) position = 1;

                    time = position * duration
                }

                seek();

                window.addEventListener('pointermove', seek);

                window.addEventListener('pointerup', () => {
                    window.removeEventListener('pointermove', seek);
                }, { once: true })
            }}
        >
            <div class="progress" style="--progress: {time / duration}%"></div>
        </div>

    </div>

    <div class="duration">
        <div>{formatToTime(time)}</div>
        <div>{formatToTime(duration)}</div>
    </div>
</div>

<style>
    .playbutton {
        width: 5em;
        aspect-ratio: 1;
        background-repeat: no-repeat;
        border: none;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
    }

    .player-info {
        display: grid;
        grid-template-rows: 65% 35%;
    }

    .scrubber {
		flex: 1;
		height: 0.5em;
		background: var(--header-color);
		overflow: hidden;
	}

	.progress {
		width: calc(100 * var(--progress));
		height: 100%;
		background: var(--pure-color);
	}


    .duration {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    }
</style>