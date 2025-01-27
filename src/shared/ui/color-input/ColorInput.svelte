<script>
	import { paperContext } from '@shared/context/paper.svelte';

	let { identifier } = $props();
	let context;
	paperContext.subscribe((value) => {
		context = value;
	});
</script>

<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8">
	<div
		class="pointer-events-none absolute left-0 top-0 flex h-full w-6 select-none items-center justify-center text-center text-text-secondary"
	>
		<div
			class="h-4 w-4 rounded-[2px]"
			style={`background-color: #${$paperContext[identifier]}`}
		></div>
	</div>
	<input
		bind:value={$paperContext[identifier]}
		type="text"
		class="leading-2 box-border h-full w-full rounded-lg border border-transparent bg-input-bg pl-6 pr-2 align-middle text-[14px] font-normal outline-none selection:bg-input-selection-bg selection:text-input-selection-text focus:border-border"
	/>
</div>
