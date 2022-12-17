<script lang="ts">
  import Socials from '../socials/Socials.svelte'
  import FooterItem from './FooterItem.svelte'
</script>

<div>
  <FooterItem inner="v3.1;" />
  <FooterItem inner="Created with SvelteKit;" />
  <FooterItem
    inner="Design inspired by: Gatsby Starter CV by Santos Francisco;"
  />
  <Socials />
</div>

<style lang="scss">
  @use './styles.scss';
</style>
