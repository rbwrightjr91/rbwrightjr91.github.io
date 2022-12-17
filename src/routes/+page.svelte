<script lang="ts">
  import { onMount } from 'svelte'

  import Hero from '../components/hero/Hero.svelte'
  import Wrapper from '../components/wrapper/Wrapper.svelte'
  import Avatar from '../components/avatar/Avatar.svelte'
  import Skills from '../components/skills/Skills.svelte'
  import Timeline from '../components/timeline/Timeline.svelte'
  import Footer from '../components/footer/Footer.svelte'
  import { base } from '$app/paths'
  import Section from '../components/section/Section.svelte'

  import About from '../markdown/about.md'

  let visible = false

  onMount(() => (visible = true))
</script>

{#if visible}
  <Hero title="Richard Wright" />
  <Wrapper>
    <Section
      ><Avatar
        src="{base}/images/avatar.jpeg"
        alt="Selfie of Richard"
      /></Section
    >
    <Section header="About" divider>
      <About />
    </Section>
    <Section header="Skills" divider>
      <Skills />
    </Section>
    <Section header="Experience" divider><Timeline /></Section>
    <Section><Footer /></Section>
  </Wrapper>
{:else}
  <div class:visible={!visible} />
{/if}

<style lang="scss">
  @use './index.scss';
</style>
