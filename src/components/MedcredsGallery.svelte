<script>
	import { small, medium, large, xlarge, selected, selectedLarge, lastLarge, nextLarge, selectedSmall } from '../stores/gallery.js'
	import { slide, fade } from 'svelte/transition'
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
	import { Icon, Button } from 'svelte-materialify'
	import Image from "svelte-image"

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
  {#each $small as image (image.name)}
    <img src={image.path} on:click="{() => $selected = image}" alt={image.name} />
  {/each}
</div>

{#if $selected}

    <div class="gallery-container">

      {#key $selectedLarge.name}

        <Button icon
          style="position: absolute; top: 300px; left: 5px"
          class="navigate left"
          on:click="{ () => $selected = $lastLarge }"
          aria-label="Go forward one image"
          >
            <Icon style="color: #fff" path={mdiChevronLeft} size="50px" />
        </Button>

        <div class="last-container">
          <div class="large-images" in:fade on:click="{() => { $selected = $lastLarge } }">
            <img lazy={false} src={$lastLarge.path} alt={$lastLarge.name} />
          </div>
        </div>

        <div class="large-images" in:fade on:click="{() => { $selected = null} }">
          <img  lazy={false} src={$selectedLarge.path} alt={$selectedLarge.name} />
        </div>

        <div class="next-container">
          <div class="large-images" in:fade on:click="{() => { $selected = $nextLarge } }">
            <img  lazy={false} src={$nextLarge.path} alt={$nextLarge.name} />
          </div>
        </div>
 
        <Button icon
          style="position: absolute; top: 300px; right: 5px"
          class="navigate right"
          on:click="{ () => $selected = $nextLarge }"
          aria-label="Go forward one image"
          >
            <Icon style="color: #fff" path={mdiChevronRight} size="50px" />
        </Button>

      {/key}

      <div class="bottom-images" in:fade out:fade>
        {#each $selectedSmall as img (img.name)}
          <img
            src={img.path} on:click="{() => $selected = img}"
            alt={img.name} class:selected = "{ img === $selected }"
          />
        {/each}
      </div>

  </div>
{/if}


<style global>
  .next-container {
    position: fixed;
    top: 100px;
    right: -90%;
    z-index: 5;
    width: 100%;
  }

  .last-container {
    position: fixed;
    top: 100px;
    left: -90%;
    z-index: 5;
    width: 100%;
  }
  .gallery-container {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 5;
    width: 100%;
  }
  .navigate {
    position: absolute;
    top: 300px;
    z-index: 999;
    cursor: pointer;
  }
  .navigate.left {
    left: -5px;
  }
  .navigate.right {
    right: -5px;
  }
  .bottom-images,.small-images {
    display: flex;
    bottom: 0;
    left: 0;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    flex-wrap: nowrap;
    z-index: 5;
    /* background-color: #fff; */
    z-index: 95;
    /* max-height: 120px; */
  }
  .bottom-images {
    position: fixed;
    /* margin-left: -80px; */
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
    left: 10%;
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
  