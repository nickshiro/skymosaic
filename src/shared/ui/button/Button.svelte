<script>
	export let onClick = () => {};
</script>

<div class="w-full pl-4 pr-2 pt-2">
	<button
		class="bg-button-bg text-button-text box-border h-8 w-full rounded-lg font-primary outline-none"
		on:click={onClick}
	>
		<slot></slot>
	</button>
</div>
