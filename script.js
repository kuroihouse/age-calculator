import Datepicker from './node_modules/vanillajs-datepicker/js/Datepicker.js';
import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3/build/es6/luxon.js';

window.addEventListener('DOMContentLoaded', () => {
	// live updating the browser
	const dateBox = document.querySelector('#dateBox');
	const date = document.querySelector('#date');

	const datePicker = new Datepicker(dateBox, {
		// initializing datePicker
		maxDate: DateTime.now() / 1.02, // lil math to help the maxDate dynamically update based on the current date (it's not perfect)
	});

	dateBox.addEventListener('changeDate', (event) => {
		// listens for the event 'changeDate' which is a luxon event
		const selectedDate = event.target.value;

		const birthDate = DateTime.fromFormat(selectedDate, 'MM/dd/yyyy'); // formatting duh
		const now = DateTime.now();

		const age = Math.floor(now.diff(birthDate, 'years').years);
		date.textContent = age;
	});
});
