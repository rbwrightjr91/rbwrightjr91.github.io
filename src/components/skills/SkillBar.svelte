<script context="module" lang="ts">
    import type { Skill } from './domain.type'
</script>

<script lang="ts">
    export let skill: Skill
</script>

<div>
    <label htmlFor={skill.name}>{skill.name}</label>
    <div id={skill.name}>
        <div style="--skillWidth: {skill.level}%"></div>
    </div>
</div>

<style lang="scss">
    @use "./skillbar.styles.scss"
</style>
