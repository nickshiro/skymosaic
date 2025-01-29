<script>
	import { Header } from '@shared/ui/header';
	import { Subtitle } from '@shared/ui/subtitle';
	import { TextInput } from '@shared/ui/text-input';
	import { DateInput } from '@shared/ui/date-input';
	import { TimeInput } from '@shared/ui/time-input';
	import { Hr } from '@shared/ui/hr';
	import { Button } from '@shared/ui/button';
	import { paperContext, resetPaper } from '@shared/context/paper.svelte';
	import { openPopup } from '@shared/context/popup.svelte';

	let context;
	paperContext.subscribe((value) => {
		context = value;
	});
</script>

<aside
	class="z-50 box-border flex scale-100 transform flex-col items-stretch overflow-hidden border-r border-border bg-secondary lg:h-screen lg:justify-between"
>
	<div>
		<Hr />
		<div class="flex py-2 pl-4">
			<img class="mr-2 mt-[2px] h-6 w-6" src="icons/icon.svg" alt="Star" />
			<h1 class="select-none font-primary text-xl font-medium">Skymosaic</h1>
		</div>
		<Hr />
		<div class="mb-3">
			<Header>Location</Header>
			<Subtitle>Latitude</Subtitle>
			<TextInput maxlength={10} identifier="latitude" icon="Y"></TextInput>
		</div>
		<div class="mb-2 mt-2">
			<Subtitle>Longitude</Subtitle>
			<TextInput maxlength={11} identifier="longitude" icon="X"></TextInput>
		</div>
		<div class="mb-4">
			<Button onClick={openPopup}>Open map</Button>
		</div>
		<div class="mb-3 mt-2">
			<Hr />
			<Header>Date and time</Header>
			<Subtitle>Date</Subtitle>
			<DateInput identifier="date" />
		</div>
		<div class="mb-4 mt-2">
			<Subtitle>Time</Subtitle>
			<TimeInput identifier="time" />
		</div>
		<div class="mb-3 mt-2">
			<Hr />
			<Header>Signature</Header>
			<Subtitle>Header</Subtitle>
			<TextInput identifier="header" maxlength={80} icon="T"></TextInput>
		</div>
		<div class="mb-4 mt-2">
			<Subtitle>Subtitle</Subtitle>
			<TextInput identifier="subtitle" maxlength={80} icon="T"></TextInput>
		</div>
		<Hr />
	</div>
	<div>
		{#if $paperContext.changed}
			<Hr />
			<Header>Reset paper</Header>
			<div class="mb-4">
				<Button onClick={resetPaper}>Set default</Button>
			</div>
		{/if}
	</div>
</aside>
