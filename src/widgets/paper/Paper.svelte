<script lang="ts">
	import { onMount } from 'svelte';
	import { paperContext } from '@shared/context/paper.svelte';
	import SkyMap from 'skymap';

	let context;

	paperContext.subscribe((value) => {
		context = value;
	});

	let skymapContainer: HTMLDivElement | null = null;
	let skymap: SkyMap | null = null;

	// Initialize SkyMap once the component is mounted
	onMount(async () => {
		if (skymapContainer) {
			skymap = await SkyMap.create(
				skymapContainer,
				{
					date: new Date('2023-01-01T12:00:00Z')
				},
				// config is something like this, maybe become default for skymap
				{
					constellations: {
						lines: {
							labels: {
								enabled: false
							}
						}
					},
					planets: {
						color: 'white',
						labels: {
							enabled: false
						}
					},

					sun: {
						enabled: false,
						color: 'white',
						label: {
							enabled: false
						}
					},

					stars: {
						color: 'white'
					}
				}
			);
			/**
			 * do something like this to update bg color
			 * skymap.config.bgColor = $paperContext.background;
			 *
			 * to update date
			 * skymap.setDate(<actual date object>);
			 *
			 * to update location
			 * skymap.setLocationWithAnimation(30, -50, 500, () => {
			 *	 // callback for animations steps, now required (ILL FIX IT LATER)
			 * });
			 */
		}
	});
</script>

<div
	class="relative box-border h-full select-none [aspect-ratio:0.7070707071]"
	id="paper"
	style={`background-color: ${$paperContext.background}`}
>
	<div class="absolute left-0 top-0 w-full py-[5%]">
		<div bind:this={skymapContainer} class="mx-auto aspect-square w-[80%]"></div>
	</div>

	<div class="absolute bottom-0 left-0 h-[35%] w-full items-center">
		<h1
			class="mx-auto max-w-[80%] break-words text-center font-primary text-[2vmin]"
			style={`color: ${$paperContext.text}`}
		>
			{$paperContext.header}
		</h1>
		<p
			class="mx-auto max-w-[80%] break-words text-center font-primary text-[2vmin]"
			style={`color: ${$paperContext.text}`}
		>
			{$paperContext.subtitle}
		</p>
	</div>
	<div class="absolute bottom-0 left-0 h-[10%] w-full items-center">
		<p class="text-center font-primary text-[1.5vmin]" style={`color: ${$paperContext.text}`}>
			{$paperContext.date.toLocaleUpperCase()}
			{$paperContext.time.toLocaleUpperCase()}
		</p>
	</div>
</div>
