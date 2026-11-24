<script lang="ts">
    const { href, children, ...restProps } = $props();
</script>

<a href={href} {...restProps}>
    <span aria-hidden="true">{@render children()}</span>
    {@render children()}
</a>

<style>
    a {
        display: inline-block;
        position: relative;
        color: rgba(0, 0, 0, 0.8);
        text-decoration-color: var(--link-color);
    }

    span:hover {
        transform: translate(-0.125rem, -0.25rem);
        height: calc(100% + 0.25rem);
        color: var(--link-color);
    }

    span {
        position: absolute;
        user-select: none;
        width: 100%;
        top: 0;
        left: 0;
        color: var(--text-color);
        transition: all 0.1s;
    }
</style>