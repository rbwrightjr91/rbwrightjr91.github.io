<script lang="ts">
  import type { Skill } from './domain.type'
  export let skill: Skill
</script>

<div>
  <label for={skill.name}>{skill.name}</label>
  <div id={skill.name}>
    <div style="--skillWidth: {skill.level}%" />
  </div>
</div>

<style lang="scss">
  @use './skillbar.styles.scss';
</style>
