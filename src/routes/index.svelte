<script>
	import { Card, CardText, CardSubtitle } from 'svelte-materialify';
	import { fade, fly } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import Gallery from '../components/Gallery.svelte'
	import { selected } from '../stores/gallery.js'
	import { Overlay } from 'svelte-materialify'

	import { positions } from '../stores/resume'

	$: console.log($selected)
</script>

<style>
	@media (min-width: 480px) {
	}
</style>

<svelte:head>
	<title>Phillip Weston</title>
</svelte:head>

<Overlay active={$selected} absolute on:click={() => { selected.set(null) }} index={1} />

	<Gallery />

<div style="display: flex; align-items: center; justify-content: center; width: 800px	;">
	<div style="width: 800px; flex: 0 0 100%;">
		<Card style="margin: 5px; width: 100%;" flat>
			<CardText>	
				<div class="text--primary text-h3">
					Phillip Andrew Weston
				</div>
			</CardText>
			<CardSubtitle class="text-h5">
				<div class="text--primary text-h4">
					Senior UX / API / Platform Engineer
				</div>
			</CardSubtitle>
				<CardText>
				UX-driven software engineer with a key focus on ensuring user comprehension. Frontend experience with React/Redux, Vue.js, and other frameworks. Experience building REST APIs in Node.js, CI/CD, Kubernetes, and a general practice of DevOps. Nearly 20 of experience spanning many facets of the development lifecycle. EQ-driven advocate for peer, product, and process improvements.
			</CardText>
		</Card>

		{#each $positions as { company, title, dates, accomplishments } (company)}
			<Card style="margin: 5px; width: 100%;" color flat>
				<CardText>

					<div class="text--primary text-h5">
						{title} / {company}
					</div>
					<div class="text-h6">
						{dates}
					</div>
					<!-- {#if company === 'Medcreds'}
						<Gallery />
					{/if} -->
					<div class="text--primary">
						<ul>
							{#each Array.from(new Set(accomplishments)) as accomplishment (accomplishment)}
								<li animate:flip in:fade out:fly={{x:100}}>
									{accomplishment}
								</li>
							{/each}
						</ul>
					</div>
				</CardText>
				<!-- <CardActions>
					<Button text class="primary-text">Learn More</Button>
				</CardActions> -->
			</Card>
		{/each}
	</div>
</div>