<script context="module" lang="ts">
  import type { Skill } from './domain.type'
  import SkillBar from './SkillBar.svelte'

  const skills: Skill[] = [
    { name: 'TypeScript', level: 70 },
    { name: 'Svelte', level: 45 },
    { name: 'Git', level: 70 },
    { name: 'Python', level: 60 },
    { name: 'Docker', level: 50 },
    { name: 'SQL', level: 45 },
    { name: 'NodeJS', level: 65 },
  ]
</script>

<div>
  <h1>Skills</h1>
  {#each skills as skill}
    <SkillBar {skill} />
  {/each}
</div>
