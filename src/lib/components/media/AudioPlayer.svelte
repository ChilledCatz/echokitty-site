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

    <div class="button-container">
        <button 
            class="playbutton"
            aria-label={paused ? 'play' : 'pause'} 
            onclick={() => paused = !paused}
        >
            {#if (paused)}
                <img src="/images/svg/player-play.svg" alt="play icon">
            {:else}
                <img src="/images/svg/player-pause.svg" alt="pause icon">
            {/if}
        </button>
        <div class="button-shadow"></div>
    </div>

    <div class="song-info">
        <span>{title}</span>
        &bull;
        <span>{artist}</span>
    </div>

       <!-- thank u https://svelte.dev/tutorial/svelte/media-elements -->
    <div class="scrubber-container">
        <span class="scrubber-hoverarea"></span>
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

        <div class="duration">
            <div>{formatToTime(time)}</div>
            <div>{formatToTime(duration)}</div>
        </div>
    </div>
</div>

<style>
    .player { 
        --button-width: 80px;
        --button-height: 80px;
        --offset: calc(var(--button-width) - 14px);
        --scrubber-width: 100%;
        --scrubber-height: 4px;

        height: var(--button-height);
        display: grid;
        grid-template-columns: var(--offset) auto;
        grid-template-rows: 65% 35%;
    }

    .button-container {
        position: relative;
        width: var(--button-width);
        height: var(--button-height);
        z-index: 1;
    }

    .button-shadow {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: var(--pure-color);
        clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
        z-index: -1;
    }

    .playbutton {
        width: var(--button-width);
        height: var(--button-height);
        aspect-ratio: 1;
        background-repeat: no-repeat;
        border: none;
		clip-path: polygon(22.5% 0, 100% 0, 77.5% 100%, 0 100%);
        z-index: 1;
        transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
    }

    .song-info {
        display: flex;
        align-items: center;
        padding-left: 1em;
        font-size: 1.125rem;
        line-height: 1.75rem;
        overflow: hidden;
        white-space: nowrap;
        gap: 0.5rem;
    }

    .scrubber-container {
        position: relative;
        width: 100%;
        grid-column-start: 2;
    }

    .scrubber {
		flex: 1;
        width: var(--scrubber-width);
		height: var(--scrubber-height);
		background: var(--header-color);
		overflow: hidden;
        clip-path: polygon(0 0, 100% 0, calc(100% - calc(var(--scrubber-height)) * 0.5) 100%, 0 100%);
        transition: all 0.3s;
	}

    .scrubber-hoverarea {
        position: absolute;
        left: 0;
        inset: calc(-6px - var(--scrubber-height)) 0;
        width: 100%;
        height: calc(6 * var(--scrubber-height));
    }

	.progress {
		width: calc(100 * var(--progress));
		height: 100%;
		background: var(--pure-color);
        clip-path: polygon(0% 0, 100% 0, 99.4% 100%, 0 100%);
	}

    .duration {
        display: flex;
        grid-column-start: 2;
        justify-content: space-between;
        padding: 0.25rem 0.75rem;
    }

    .playbutton:hover { 
        transform: translate(-4px, -8px);
        background-color: #fff;
    }

    .scrubber:hover, .scrubber-hoverarea:hover + .scrubber {
        --scrubber-height: 8px;
    }
</style>