<script context="module" lang="ts">
    import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'

    const PRIMARY = '#00adb5'
</script>


<script lang="ts">
    export let icon: {iconDef: IconDefinition, color: string}
    export let altIconDef: IconDefinition | undefined = undefined
    export let dimension: number = 32

    let fillColor = PRIMARY
    let icn = icon.iconDef

    const handleFocus = () => {
        if(altIconDef) { icn = altIconDef }
        fillColor = icon.color
    }

    const handleBlur = () => {
        if(altIconDef) { icn = icon.iconDef }
        fillColor = PRIMARY
    }
</script>

<span on:mouseover={handleFocus} on:focus={handleFocus} on:mouseleave={handleBlur}>
    {@html
    `<svg role="img" viewbox="0 0 512 512" height="${dimension}" width="${dimension}">
        <g>
        <path fill="${fillColor}" d="${icn.icon[4]}" />
        </g>
    </svg>
    `}
</span>

