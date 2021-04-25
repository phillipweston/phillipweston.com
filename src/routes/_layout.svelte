<!-- <script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<!-- <Nav {segment}/> -->



<script>
  import {
    AppBar,
    Button,
    Icon,
    NavigationDrawer,
    Overlay,
		MaterialApp } from 'svelte-materialify'
  import {
		mdiMenu
	} from '@mdi/js'

  let active = false;
  function toggleNavigation() {
    active = !active;
  }
</script>

<MaterialApp>
<div style="position:relative">
  <!-- <AppBar>
    <div slot="icon">
      <Button fab depressed on:click={toggleNavigation}>
        <Icon path={mdiMenu} />
      </Button>
    </div>
    <span slot="title"> Click The Menu </span>
  </AppBar> -->
  <!-- <NavigationDrawer style="position: relative" {active}>Content</NavigationDrawer> -->
  <!-- <Overlay {active} absolute on:click={toggleNavigation} index={1} /> -->
	<main>
		<slot></slot>
	</main>	
</div>
</MaterialApp>