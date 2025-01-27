<script>
	import { paperContext } from '@shared/context/paper.svelte';

	export let identifier;

	let color = '#';

	// Инициализация контекста
	const unsubscribe = paperContext.subscribe((value) => {
		if (identifier in value) {
			color = value[identifier] || '#';
		}
	});

	import { onDestroy } from 'svelte';
	onDestroy(() => {
		unsubscribe();
	});

	function handleTextInput(event) {
		let value = event.target.value;

		if (!value.startsWith('#')) {
			value = '#' + value.replace(/^#*/, '');
		}
		value = value.substring(0, 7);
		value = '#' + value.slice(1).replace(/[^0-9a-fA-F]/g, '');

		updateColor(value);
	}

	function handleColorInput(event) {
		const value = event.target.value;

		updateColor(value);
	}

	function updateColor(value) {
		color = value;

		paperContext.update((currentContext) => {
			currentContext[identifier] = value;
			return currentContext;
		});
	}
</script>

<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8">
	<div class="absolute left-0 top-0 flex h-full w-8 items-center justify-center">
		<input
			type="color"
			value={color}
			on:input={handleColorInput}
			class="color-input box-border h-4 w-4 cursor-pointer appearance-none rounded border-none bg-transparent p-0"
		/>
	</div>
	<input
		bind:value={color}
		on:input={handleTextInput}
		minlength="4"
		maxlength="7"
		type="text"
		class="leading-2 box-border h-full w-full rounded-lg border border-transparent bg-input-bg pl-8 pr-2 align-middle text-[14px] font-normal outline-none selection:bg-input-selection-bg selection:text-input-selection-text focus:border-border"
	/>
</div>

<style>
	.color-input::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	.color-input::-webkit-color-swatch {
		border: none;
		border-radius: 0.25rem;
	}

	.color-input::-moz-color-swatch {
		border: none;
	}
</style>
