<script lang="ts">
  import Socials from '../socials/Socials.svelte'

  export let src: string
  export let alt: string
</script>

<div>
  <img {src} {alt} />
  <span>
    <Socials />
  </span>
</div>

<style lang="scss">
  @use './styles.scss';
</style>
