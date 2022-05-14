const result = document.querySelector('#result');
const popButton = document.querySelector('#pop_btn');
const shiftButton = document.querySelector('#shift_btn');
const sliceButton = document.querySelector('#slice_btn');
const sliced = document.querySelector('#sliced');

const listOfNames = [ 'Jonas', 'Petras', 'Tomas', 'Kazys', 'Linas' ];

const setNames = (names) => {
	result.innerText = `[${names.join(', ')}]`;
};
setNames(listOfNames);

popButton.addEventListener('click', () => {
	// 1. Pašalinkit iš listOfNames elementą iš galo
	// JŪSŲ KODAS PRASIDEDA ČIA

	// BAGIASI ČIA
	setNames(listOfNames);
});

shiftButton.addEventListener('click', () => {
	// 2. Pašalinkit iš listOfNames elementą iš priekio
	// JŪSŲ KODAS PRASIDEDA ČIA

	// BAGIASI ČIA
	setNames(listOfNames);
});

sliceButton.addEventListener('click', () => {
	// 3. Pakeiskite slicedArray kintamąjį į tokį,
	// kuris iškirps paskutinius du narius iš listOfNames masyvo
	// Kodas prasideda čia
	const slicedArray = [];
	// Baigiasi čia
	sliced.innerText = slicedArray.join(', ');
});
