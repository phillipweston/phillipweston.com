<script>
	import { small, large, selected, selectedLarge, lastLarge, nextLarge, selectedSmall } from '../stores/gallery.js'
	import { slide, fade } from 'svelte/transition'
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
	import { Icon, Button } from 'svelte-materialify'

  $: {
    console.log('$selected', $selected, $selectedLarge)
    console.log('$nextLarge', $nextLarge)
    console.log('$lastLarge', $lastLarge)
  }

  $: hidden = $selectedSmall.length

  const handleKeydown = (event) => {
    if (!$selected) return
    switch (event.key) {
      case 'ArrowRight':
      case 'd':
        $selected = $nextLarge
        break
      case 'ArrowLeft':
      case 'a':
        $selected = $lastLarge
        break
      case 'Escape':
        $selected = null
    }
  }
</script>


<svelte:window on:keydown={handleKeydown}/>

<div class="small-images" class:hidden>
  {#each $small as img (img.name)}
    <img src={img.path} on:click="{() => $selected = img}" alt={img.name} />
  {/each}
</div>

{#if $selected}
  <div class="gallery-container">
    <div class="bottom-images" in:fade out:fade>
      {#each $selectedSmall as img (img.name)}
        <img
          src={img.path} on:click="{() => $selected = img}"
          alt={img.name} class:selected = "{ img === $selected }"
        />
      {/each}
    </div>
    <Button
      on:click="{ () => $selected = $lastLarge }"
      aria-label="Go back one image"
      fab style="position: absolute; left: 100px; top: 500px; z-index: 999"
    >
      <Icon path={mdiChevronLeft} size="50px"  />
    </Button>
      {#key $selectedLarge.name}
        <div class="large-images" in:fade on:click="{() => { $selected = null} }">
          <img src={$selectedLarge?.path} alt={$selectedLarge?.name} />
        </div>
      {/key}
      <Button 
        on:click="{ () => $selected = $nextLarge }"
        fab style="position: absolute; right: 100px; top: 500px; z-index: 999"
        aria-label="Go forward one image"
      >
        <Icon path={mdiChevronRight} size="50px"  />
      </Button>
  </div>

  <!-- <Icon class="mdi chevron-right" /> -->
{/if}


<style>
  .gallery-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    width: 100%;
  }
  .bottom-images,.small-images {
    display: flex;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    flex-wrap: nowrap;
    z-index: 5;
    /* background-color: #fff; */
    z-index: 999;
    /* max-height: 120px; */
  }
  .selected {
    border: 5px solid #fff;
  }
  .bottom-images img,.small-images img {
    display: flex;
    min-height: min-content;
    height: 115px;
    cursor: pointer;
    padding: 2px;
    z-index: 5;
    scroll-snap-align: start;
		text-align: center;
		position: relative;
  }
  .large-images {
    /* padding-top: 10px; */
    /* border-top: 1px solid #fff; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  
  }
  
  .large-images img {
    display: inline-block;
    z-index: 10;
    cursor: pointer;
  }
  
  .hidden {
    visibility: hidden;
  }
  </style>
  