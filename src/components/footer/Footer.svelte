<script lang="ts">
  import Socials from '../socials/Socials.svelte'
  import FooterItem from './FooterItem.svelte'

  const VERSION = '3.2'
</script>

<div>
  <FooterItem inner="v{VERSION};" />
  <FooterItem inner="Created with SvelteKit;" />
  <FooterItem
    inner="Design inspired by: Gatsby Starter CV by Santos Francisco;"
  />
  <Socials />
</div>

<style lang="scss">
  @use './styles.scss';
</style>
