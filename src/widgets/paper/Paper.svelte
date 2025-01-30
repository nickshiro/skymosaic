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
	style={`background-color: ${$paperContext.background}`}
>
	<div class="absolute bottom-0 left-0 h-[35%] w-full items-center">
		<h1
			class="mx-auto max-w-[80%] break-words text-center font-primary text-[20px]"
			style={`color: ${$paperContext.text}`}
		>
			{$paperContext.header}
		</h1>
		<p
			class="mx-auto max-w-[80%] break-words text-center font-primary text-[20px]"
			style={`color: ${$paperContext.text}`}
		>
			{$paperContext.subtitle}
		</p>
	</div>
	<div class="absolute bottom-0 left-0 h-[10%] w-full items-center">
		<p class="text-center font-primary text-[14px]" style={`color: ${$paperContext.text}`}>
			{$paperContext.date.toLocaleUpperCase()}
			{$paperContext.time.toLocaleUpperCase()}
		</p>
	</div>
</div>
