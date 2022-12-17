<script lang="ts">
  export let header: string = ''
  export let center: boolean = false
  export let divider: boolean = false
</script>

<div style="--centerSection: {center}">
  {#if header != ''}
    <h1>{header}</h1>
  {/if}
  <slot />
</div>
{#if divider}
  <hr />
{/if}

<style lang="scss">
  @use './styles.scss';
</style>
