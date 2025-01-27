import { writable } from 'svelte/store';

const paperContext = writable({
	date: '2024-08-09',
	time: '03:00',
	latitude: 59.855774,
	longitude: 31.410969,
	header: 'Under this sky, I found you',
	subtitle: '',
	text: '#FFFFFF',
	background: '#000000'
});

export { paperContext };
