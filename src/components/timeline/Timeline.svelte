<script context="module" lang="ts">
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const apiUrl = 'http://192.168.1.2:8000'

  type Job = {
    id: number
    company: string
    begin: string
    end?: string
    title: string
    description?: string
  }
</script>

<script lang="ts">
  const jobData = writable<Job[]>([])

  onMount(async () => {
    fetch(`${apiUrl}/jobs/`)
      .then((response) => response.json())
      .then((data) => {
        jobData.set(data)
      })
      .catch((error) => {
        console.error(error)
        return []
      })
  })
</script>

<div>
  {#if $jobData}
    <h1>Experience</h1>
    {#each $jobData as job}
      <article>
        <div>
          <span>
            <span class="month">
              {new Date(job.begin).toLocaleDateString('us-EN', {
                month: 'short',
              })}
            </span>
            <span class="year">
              {new Date(job.begin).toLocaleDateString('us-EN', {
                year: 'numeric',
              })}
            </span>
          </span>
          <div>
            <h2>
              {job.title} @ {job.company}
              <br />
              <small>
                {new Date(job.begin).toLocaleDateString('en-US')} - {job.end
                  ? new Date(job.end).toLocaleDateString('en-US')
                  : 'present'}
              </small>
            </h2>
            {#if job.description}<p>{job.description}</p>{/if}
          </div>
        </div>
      </article>
    {/each}
  {/if}
</div>

<style lang="scss">
  @use './styles.scss';
</style>
