<script context="module" lang="ts">
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const apiUrl = 'http://192.168.1.2:8000'

  type Job = {
    company: string
    begin: Date
    end?: Date
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
