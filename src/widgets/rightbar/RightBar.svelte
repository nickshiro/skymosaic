<script lang="ts">
	import { Header } from '@shared/ui/header';
	import { Subtitle } from '@shared/ui/subtitle';
	import { TextInput } from '@shared/ui/text-input';
	import { Hr } from '@shared/ui/hr';

	import { PaperExporter } from '@features/export';
	import { PaperSize } from '@features/export';
	import { onMount } from 'svelte';
	import { Button } from '@shared/ui/button';
	import { ColorInput } from '@shared/ui/color-input';

	let exporter: PaperExporter | null = null;

	onMount(() => {
		const paper = document.getElementById('paper') as HTMLDivElement | null;
		if (paper) {
			exporter = new PaperExporter(paper);
		} else {
			console.error('Element with ID "paper" not found.');
		}
	});

	const handleExport = async () => {
		if (exporter) {
			try {
				await exporter.export();
			} catch (error) {
				console.error('Export failed:', error);
			}
		} else {
			console.error('Exporter is not initialized.');
		}
	};
</script>

<aside
	class="fixed bottom-0 right-0 top-0 z-50 box-border flex h-screen w-60 scale-100 transform flex-col items-stretch justify-between overflow-hidden border-r border-border bg-secondary"
>
	<div>
		<div class="mb-3">
			<Header>Colors</Header>
			<Subtitle>Background</Subtitle>
			<ColorInput identifier="background" />
		</div>
		<div class="mb-3">
			<Subtitle>Text</Subtitle>
			<ColorInput identifier="text" />
		</div>
	</div>
	<div>
		<Hr />
		<Header>Export</Header>
		<div class="mb-4">
			<Button onClick={handleExport}>Download png</Button>
		</div>
	</div>
</aside>
