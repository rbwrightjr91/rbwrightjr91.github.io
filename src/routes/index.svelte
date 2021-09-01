<script context="module" lang="ts">
    import { onMount } from 'svelte'
    import { faGitlab, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
    
    import Hero from '../components/hero/Hero.svelte'
    import Wrapper from '../components/wrapper/Wrapper.svelte'
    import Avatar from '../components/avatar/Avatar.svelte'
    import Icon from '../components/icon/Icon.svelte'
</script>

<script lang="ts">
    
    let visible = false

    const socials: IconDefinition[] = [
        faGitlab,
        faGithub,
        faLinkedin,
        faTwitter
    ]

    onMount(() => visible = true)

</script>

{#if visible}
    <Hero title="Richard Wright" />
    <Wrapper>
        <Avatar src='../../static/images/avatar.jpeg' alt="Selfie of Richard" />
        {#each socials as social}
            <!-- TODO: Icon styling -->
            <Icon icon={social}/> 
        {/each}
    </Wrapper>
{:else}
    <div class:visible={!visible}></div>
{/if}
<style lang="scss">
    @use './index.scss'
</style>
