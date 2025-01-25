<script lang="ts">
	import { paperContext } from '@shared/context/paper.svelte';

	let context;
	paperContext.subscribe((value) => {
		context = value;
	});

	const getDate = (): string => {
		const [day, month, year] = $paperContext.date.split('-').map(Number);

		const date = new Date(year, month - 1, day);

		if (isNaN(date.getTime())) {
			throw new Error("Invalid date string format. Expected format is 'dd-mm-yyyy'.");
		}

		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		};

		return date.toLocaleDateString(undefined, options);
	};
</script>

<div class="relative box-border h-full select-none bg-white [aspect-ratio:0.7070]">
	<div>gg</div>
	<div class="absolute bottom-0 left-0 h-[30%] w-full items-center">
		<h1 class="font-primary text-center">{$paperContext.header}</h1>
		<p class="font-primary text-center">{$paperContext.subtitle}</p>
	</div>
	<div class="absolute bottom-0 left-0 h-[10%] w-full items-center">
		<p class="font-primary text-center">{$paperContext.date} {$paperContext.time}</p>
	</div>
</div>
