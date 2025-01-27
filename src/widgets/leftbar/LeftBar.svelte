<script>
	import { Header } from '@shared/ui/header';
	import { Subtitle } from '@shared/ui/subtitle';
	import { TextInput } from '@shared/ui/text-input';
	import { DateInput } from '@shared/ui/date-input';
	import { TimeInput } from '@shared/ui/time-input';
	import { Hr } from '@shared/ui/hr';
	import { Button } from '@shared/ui/button';
	import { paperContext, resetPaper } from '@shared/context/paper.svelte';

	let context;
	paperContext.subscribe((value) => {
		context = value;
	});
</script>

<aside
	class="bottom-0] fixed left-0 top-0 z-50 box-border flex h-screen w-60 scale-100 transform flex-col items-stretch justify-between overflow-hidden border-r border-border bg-secondary"
>
	<div>
		<h1 class="select-none py-2 pl-4 font-primary text-xl">Skymosaic</h1>
		<Hr />
		<div class="mb-3">
			<Header>Coordinates</Header>
			<Subtitle>Latitude</Subtitle>
			<TextInput maxlength={10} identifier="latitude" icon="Y"></TextInput>
		</div>
		<div class="mb-4 mt-2">
			<Subtitle>Longitude</Subtitle>
			<TextInput maxlength={11} identifier="longitude" icon="X"></TextInput>
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
