<script lang="ts">
  import { page } from '$app/stores'
  import Hero from '../components/hero/Hero.svelte'
</script>

<div>
  <nav>
    <div>
      <a href="/" class:active={$page.route.id === '/'}>Home</a>
      <a href="/blog" class:active={$page.route.id === '/blog'}>Blog</a>
    </div>
  </nav>
</div>
<Hero title="Richard Wright" />
<slot />

<style lang="scss">
  @use './layout.scss';
</style>
