<script context="module" lang="ts">
    import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
</script>


<script lang="ts">
    export let icon: IconDefinition
    export let dimension: number = 32

    console.log(icon)
</script>

{@html `
    <svg role="img" viewbox="0 0 512 512" height="${dimension}" width="${dimension}">
        <g>
            <path d="${icon.icon[4]}" />
        </g>
    </svg>
`}

