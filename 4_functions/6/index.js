const btn = document.querySelector('#evaluate_triangle');
const answer = document.querySelector('#answer');
const x = document.querySelector('#side1');
const y = document.querySelector('#side2');
const z = document.querySelector('#side3');

/*  UŽDUOTIS - Baigite rašyti triangle funkciją
1) Funkciją turi priimti tris kraštines kaip parametrus
2) Jei trikampis lygiašonis - funkcija gražina "Trikampis lygiašonis"
3) Jei trikampis statusis - funkcija gražina "Trikampis Statusis"
4) Jei trikampis įvairiakraštis - gražinti "Trikampis įvairiakraštis"
5) Kitu atveju gražinam "Ne trikampis"

Gerai atlikus užduotiį HTML'e suvedę kraštines ir paspaudę "Koks trikampis"
matysite rezultatą
*/

// KODAS PRASIDEDA ČIA

function triangle() {
	return 'Tai ne trikampis';
}

// BAIGIASI ČIA

btn.addEventListener('click', () => {
	answer.innerText = triangle(parseInt(x.value), parseInt(y.value), parseInt(z.value));
});
