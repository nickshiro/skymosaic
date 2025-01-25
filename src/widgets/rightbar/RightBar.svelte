<script>
	import { Header } from '@shared/ui/header';
	import { Subtitle } from '@shared/ui/subtitle';
	import { TextInput } from '@shared/ui/text-input';
	import { Hr } from '@shared/ui/hr';
</script>

<aside
	class="border-border fixed bottom-0 right-0 top-0 z-50 box-border flex h-screen w-60 scale-100 transform flex-col items-stretch justify-between overflow-hidden border-r bg-secondary"
>
	<div>
		<div class="mb-3">
			<Header>Colors</Header>
			<Subtitle>Latitude</Subtitle>
			<TextInput maxlength={10} icon="Y"></TextInput>
		</div>
	</div>
	<div>
		<Hr />
		<Header>Export</Header>
		<div class="mb-4">
			<Subtitle>Longitude</Subtitle>
		</div>
	</div>
</aside>
