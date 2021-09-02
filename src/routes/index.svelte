<script context="module" lang="ts">
    import { onMount } from 'svelte'
    import { faGitlab, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
    
    import Hero from '../components/hero/Hero.svelte'
    import Wrapper from '../components/wrapper/Wrapper.svelte'
    import Avatar from '../components/avatar/Avatar.svelte'
    import Icon from '../components/icon/Icon.svelte'

    type SocialLinkIcon = {
        icon: {
            iconDef: IconDefinition,
            altIconDef?: IconDefinition,
            color: string
        }
        url: string
    }
</script>

<script lang="ts">
    
    let visible = false

    const socials: SocialLinkIcon[] = [
        {icon: {iconDef: faGitlab, color: '#fc6d27'}, url: 'https://gitlab.com/rbwrightjr91'},
        {icon: {iconDef: faGithub, color: '#24292e'}, url: 'https://github.com/rbwrightjr91'},
        {icon: {iconDef: faLinkedin, color: '#0077b5'}, url: 'https://linkedin.com/in/rbwrightjr91'},
        {icon: {iconDef: faTwitter, color: '#ffffff'}, url: 'https://twitter.com/rbwrightjr91'},
        {icon: {iconDef: faEnvelope, altIconDef: faEnvelopeOpenText, color: '#c23a2b'}, url: 'mailto:me@rbwrightjr91.dev'}
    ]

    onMount(() => visible = true)

</script>

{#if visible}
    <Hero title="Richard Wright" />
    <Wrapper>
        <Avatar src='../../static/images/avatar.jpeg' alt="Selfie of Richard">
            {#each socials as social}
                <a href={social.url} target="_blank"><Icon icon={ social.icon } altIconDef={social.icon.altIconDef} /></a> 
            {/each}
        </Avatar>    
    </Wrapper>
{:else}
    <div class:visible={!visible}></div>
{/if}
<style lang="scss">
    @use './index.scss'
</style>
