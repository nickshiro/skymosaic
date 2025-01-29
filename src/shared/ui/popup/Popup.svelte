<script>
	export let open = false;
	const close = () => (open = false);
	let isVisible;

	import { popupVisible, closePopup } from '@shared/context/popup.svelte';
	$: isVisible = $popupVisible;
</script>

{#if isVisible}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		role="button"
		tabindex="0"
		on:click={closePopup}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? close() : null)}
	>
		<div
			class="rounded-lg bg-white p-2 shadow-lg hover:cursor-default"
			on:click|stopPropagation
			tabindex="0"
			role="button"
			on:keydown={(e) => {}}
		>
			<slot />
		</div>
	</div>
{/if}
