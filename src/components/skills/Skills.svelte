<script context="module" lang="ts">
    import type { Skill } from './domain.type'
    import SkillBar from './SkillBar.svelte'    

    const skills: Skill[] = [
        {name: 'TypeScript', level: 60},
        {name: 'Svelte', level: 40},
        {name: 'Git', level: 70},
        {name: 'Python', level: 50},
        {name: 'Docker', level: 35},
        {name: 'SQL', level: 45},
        {name: 'NodeJS', level: 65},
    ]
</script>

<div>
    <h1>Skills</h1>
    {#each skills as skill}
        <SkillBar {skill} />
    {/each}
</div>
