<script lang="ts">
	import { paperContext } from '@shared/context/paper.svelte';

	let context;
	paperContext.subscribe((value) => {
		context = value;
	});
</script>

<div
	class="relative box-border h-full select-none [aspect-ratio:0.7070707071]"
	id="paper"
	style={`background-color: #${$paperContext.color.background}`}
>
	<div class="absolute bottom-0 left-0 h-[30%] w-full items-center">
		<h1
			class="text-center font-primary"
			style={`color: #${$paperContext.color.text}`}
		>
			{$paperContext.header}
		</h1>
		<p
			class="text-center font-primary"
			style={`color: #${$paperContext.color.text}`}
		>
			{$paperContext.subtitle}
		</p>
	</div>
	<div class="absolute bottom-0 left-0 h-[10%] w-full items-center">
		<p
			class="text-center font-primary"
			style={`color: #${$paperContext.color.text}`}
		>
			{$paperContext.date}
			{$paperContext.time}
		</p>
	</div>
</div>
