import { writable } from 'svelte/store';

export const popupVisible = writable(false);

export function openPopup() {
	popupVisible.set(true);
}

export function closePopup() {
	popupVisible.set(false);
}
