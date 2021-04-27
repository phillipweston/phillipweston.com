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
  <div class="last-container">
    <div class="large-images" in:fade on:click="{() => $selected = $lastLarge }">
      <img src={$lastLarge.path} alt={$lastLarge.name} />
    </div>
  </div>
      <Icon path={mdiChevronLeft} size="50px"
        on:click="{ () => $selected = $lastLarge }"
        style="position: absolute; left: 10px; top: 350px; z-index: 2; color: rgba(1,1,1,0.3)"
        aria-label="Go back one image"
      />
  <div class="gallery-container">
    <div class="bottom-images" in:fade out:fade>
    <!-- {#key $lastLarge.name} -->

      {#each $selectedSmall as img (img.name)}
        <img
          src={img.path} on:click="{() => $selected = img}"
          alt={img.name} class:selected = "{ img === $selected }"
        />
      {/each}
    <!-- {/key} -->

    </div>
    {#key $selectedLarge.name}

    <!-- <Icon
      on:click="{ () => $selected = $lastLarge }"
      aria-label="Go back one image"
      class="btn-flat"
      fab style="position: absolute; left: 10px; top: 350px; z-index: 999; color: rgba(1,1,1,0.3)"
       path={mdiChevronLeft} size="50px"  /> -->

        <div class="large-images" in:fade on:click="{() => { $selected = null} }">
          <img src={$selectedLarge.path} alt={$selectedLarge.name} />
        </div>
        <Icon path={mdiChevronRight} size="50px"
          on:click="{ () => $selected = $nextLarge }"
          style="position: absolute; right: 10px; top: 350px; z-index: 0; color: rgba(1,1,1,0.3)"
          aria-label="Go forward one image"
        />
      {/key}

  </div>
  <div class="next-container">
    <div class="large-images" in:fade on:click="{() => { $selected = $nextLarge } }">
      <img src={$nextLarge.path} alt={$nextLarge.name} />
    </div>
  </div>

  <!-- <Icon class="mdi chevron-right" /> -->
{/if}


<style>

  .next-container {
    position: absolute;
    top: 115px;
    right: -85%;
    z-index: 5;
    width: 100%;
  }

  .last-container {
    position: absolute;
    top: 115px;
    left: -85%;
    z-index: 5;
    width: 100%;
  }
  .gallery-container {
    position: absolute;
    top: 0px;
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
    z-index: 95;
    /* max-height: 120px; */
  }
  .bottom-images img {
    margin-left: -80px;
  }
  .selected {
    border: 5px solid #fff;
    z-index: 100;
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
    max-height: 1000px;
  }

  
  .hidden {
    visibility: hidden;
  }
  </style>
  