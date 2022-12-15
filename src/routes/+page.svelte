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
      <div>
        <p>
          I'm currently a Software Developer at <a
            href="https://www.pluralsight.com"
            target="_blank"
            rel="noreferrer">Pluralsight</a
          >. In May 2019 I graduated Cum Laude from California State University,
          Sacramento with a Bachelor of Science in Computer Science and a
          certificate in Game Engineering. Some of my hobbies include
          <a
            href="https://www.goodreads.com/user/show/16552310-richard-wright"
            target="_blank"
            rel="noreferrer">reading books</a
          >
          and blogs,
          <a
            href="https://open.spotify.com/user/123095168?si=q24pdybvRneL2V-VxLWRcg"
            target="_blank"
            rel="noreferrer">listening to music</a
          >, playing board and video games, and watching sports (hockey and
          baseball being my favorites).
        </p>
      </div>
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
