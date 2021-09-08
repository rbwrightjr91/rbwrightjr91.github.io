<script context="module" lang="ts">
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const apiUrl = 'http://localhost:8000'

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

  $: console.log($jobData)

  onMount(async () => {
    fetch(`${apiUrl}/jobs`)
      .then((res) => {
        console.log(res)
        res.json()
      })
      .then((data) => {
        //jobData.set(data)
        console.log(data)
      })
      .catch((e) => console.error(e))
  })
</script>
