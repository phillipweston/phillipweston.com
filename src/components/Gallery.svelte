<script>
  import Image from "svelte-image"
	import { small, large } from '../stores/gallery.js'
  import { tick } from 'svelte'
import { I } from "../../__sapper__/dev/client/client.bc9aa49e.js"

  let image = { path: '', name: '' }

  $: shown = []

  const getLarge = (clicked) => {
    const { name, path} = clicked
    image = $large.find(img => img.name === name)
    debugger
  }

  const hideLarge = () => {

  }


</script>

<div style="display: flex; flex-wrap: wrap">p
  {#each $small as img (img.name)}
    <img src={img.path} on:click={async () => {
      shown.push(img.name)
      await tick()
      debugger
    }}
    alt={img.name} style="max-height: 120px; cursor: pointer" />
  {/each}
</div>


<div style="position: absolute; top: 0; left: 0; right: 0px; bottom: 0px;">
{#each $large as img (img.name)}
  {#if shown.includes(img.name) }
  SHOWN ME 
    <!-- <img src={img.path} alt={img.name} style="cursor: pointer;" /> -->
  {/if}
{/each}
</div>