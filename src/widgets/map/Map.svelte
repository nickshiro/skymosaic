<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { paperContext } from '@shared/context/paper.svelte';

	let mapContainer: HTMLDivElement | null = null;

	onMount(async () => {
		try {
			await ymaps3.ready;
			const {
				YMap,
				YMapDefaultSchemeLayer,
				YMapListener,
				YMapControlButton,
				YMapControls,
				YMapMarker,
				YMapDefaultFeaturesLayer
			} = ymaps3;

			if (!mapContainer) return;

			const map = new YMap(mapContainer, {
				location: {
					center: [$paperContext.latitude, $paperContext.longitude],
					zoom: 10
				}
			});

			map.addChild(new YMapDefaultSchemeLayer());

			const mapListener = new YMapListener({
				layer: 'any',
				onFastClick: handler,
				onTouchStart: handler
			});

			map.addChild(mapListener);

			// const controls = new YMapControls({ position: 'top left' });
			// const button = new YMapControlButton({
			// 	text: '📍',
			// 	onClick: () => {
			// 		navigator.geolocation.getCurrentPosition(
			// 			(position) => {
			// 				const { latitude, longitude } = position.coords;
			// 				map.setLocation({
			// 					center: [latitude, longitude],
			// 					zoom: 10
			// 				});
			// 			},
			// 			(error) => {
			// 				console.error('Error coordinates', error);
			// 			},
			// 			{
			// 				enableHighAccuracy: false,
			// 				timeout: 15000
			// 			}
			// 		);
			// 	}
			// });

			// controls.addChild(button);
			// map.addChild(controls);

			map.addChild(new YMapDefaultFeaturesLayer());
			const content = document.createElement('section');

			const marker = new YMapMarker(
				{
					coordinates: [$paperContext.latitude, $paperContext.longitude],
					draggable: true,
					mapFollowsOnDrag: true
				},
				content
			);

			map.addChild(marker);

			content.innerHTML = '<p style="margin:-50% 0 0 -50%;padding:0">📍</p>';

			function handler(_, e) {
				if (e) {
					$paperContext.latitude = e.coordinates[0].toFixed(6);
					$paperContext.longitude = e.coordinates[1].toFixed(6);
					const marker = new YMapMarker(
						{
							coordinates: [$paperContext.latitude, $paperContext.longitude],
							draggable: true,
							mapFollowsOnDrag: true
						},
						content
					);

					map.addChild(marker);
				}
			}
		} catch (error) {
			console.error('Load map error', error);
		}
	});
</script>

<div bind:this={mapContainer} class="h-[500px] w-[700px]"></div>
