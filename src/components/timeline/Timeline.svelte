<script lang="ts">
  import type { Job } from '../../config'

  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from 'svelte-vertical-timeline'

  import { jobs } from '../../config'

  const parseDate = (date?: string): string => {
    if (!date) return 'Current'

    const d = new Date(date)
    return `${d.toLocaleDateString('us-EN', {
      month: 'short',
    })} ${d.toLocaleDateString('us-EN', { year: 'numeric' })}`
  }

  const jobData = writable<Job[]>([])

  onMount(async () => {
    jobData.set(jobs)
  })
</script>

{#if $jobData}
  <Timeline position="alternate">
    {#each $jobData as job}
      <TimelineItem>
        <TimelineOppositeContent
          slot="opposite-content"
          style="font-size:xx-large; color: #00adb5;"
        >
          {new Date(job.begin).getFullYear()}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style="background: #00adb5; border-color: #00adb5;" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style="padding-bottom:20px;">
          {job.title}
          <small
            ><hr />
            <em
              >{job.company} <br />
              {parseDate(job.begin)} - {parseDate(job.end)}</em
            ></small
          >
          <br />
          <br />
          <small>{job.description}</small>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
{/if}

<style lang="scss">
  @use './styles.scss';
</style>
