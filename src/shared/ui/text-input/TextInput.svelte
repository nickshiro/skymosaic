<script lang="ts">
	let { icon, maxlength } = $props();
</script>

<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8">
	<div
		class="text-text-secondary pointer-events-none absolute left-0 top-0 flex h-full w-6 select-none items-center justify-center text-center"
	>
		<p class="font-primary leading-2 align-middle text-[14px] font-medium">
			{@html icon}
		</p>
	</div>
	<input
		{maxlength}
		type="text"
		class="leading-2 focus:border-border bg-input-bg selection:bg-input-selection-bg selection:text-input-selection-text box-border h-full w-full rounded-lg border border-transparent pl-6 pr-2 align-middle text-[14px] font-normal outline-none"
	/>
</div>
