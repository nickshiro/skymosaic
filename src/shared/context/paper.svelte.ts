import { writable } from 'svelte/store';

interface PaperState {
	date: string;
	time: string;
	latitude: number;
	longitude: number;
	header: string;
	subtitle: string;
	text: string;
	background: string;
	changed: boolean;
}

const defaultState = {
	date: '2024-08-09',
	time: '03:00',
	longitude: 59.855774,
	latitude: 31.410969,
	header: 'Under this sky, I found you',
	subtitle: '',
	text: '#FFFFFF',
	background: '#000000',
	changed: false
};

function getLocalStorageState() {
	if (typeof window !== 'undefined') {
		const savedState = localStorage.getItem('paperState');
		return savedState ? JSON.parse(savedState) : null;
	}
	return null;
}

const savedState = getLocalStorageState();
const initialState = savedState || defaultState;

const paperContext = writable<PaperState>(initialState);

if (typeof window !== 'undefined') {
	paperContext.subscribe(($paperContext) => {
		const isChanged = JSON.stringify($paperContext) !== JSON.stringify(defaultState);

		if (isChanged !== $paperContext.changed) {
			paperContext.update((state) => ({ ...state, changed: isChanged }));
		}

		localStorage.setItem('paperState', JSON.stringify($paperContext));
	});
}

const resetPaper = () => {
	if (
		confirm('Are you sure you want to reset the paper settings? All unsaved changes will be lost')
	) {
		paperContext.set({ ...defaultState, changed: false });
		if (typeof window !== 'undefined') {
			localStorage.removeItem('paperState');
		}
	}
};

export { paperContext, resetPaper };
