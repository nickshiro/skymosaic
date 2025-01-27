import html2canvas from 'html2canvas';
import { paperContext } from '@shared/context/paper.svelte';
import { get } from 'svelte/store';

export enum PaperSize {
	A6 = 'A6',
	A5 = 'A5',
	A4 = 'A4',
	A3 = 'A3',
	A2 = 'A2'
}

const PaperDimensionsMap: { [key in PaperSize]: { width: number; height: number } } = {
	[PaperSize.A6]: { width: 1240, height: 1748 },
	[PaperSize.A5]: { width: 1748, height: 2480 },
	[PaperSize.A4]: { width: 2480, height: 3508 },
	[PaperSize.A3]: { width: 3508, height: 4961 },
	[PaperSize.A2]: { width: 4961, height: 7016 }
};

export class PaperExporter {
	constructor(private element: HTMLDivElement) {
		if (!element) console.error('Element for export not found');
	}

	public async export(
		paperSize: PaperSize = PaperSize.A4,
		fileName: string = 'skymosaic.png'
	): Promise<void> {
		const scale = PaperDimensionsMap[paperSize].width / this.element.offsetWidth;
		const { background } = get(paperContext);

		const canvas = await html2canvas(this.element, {
			scale,
			useCORS: true,
			backgroundColor: background,
			logging: false
		});

		const link = document.createElement('a');
		link.href = canvas.toDataURL('image/png');
		link.download = fileName;
		link.click();
	}
}
