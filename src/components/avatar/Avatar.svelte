<script lang="ts">

    export let src: string
    export let alt: string
</script>

<div>
    <img {src} {alt} />
    <span>
        <slot />
    </span>
</div>

<style lang="scss">
    @use './styles.scss'
</style>
