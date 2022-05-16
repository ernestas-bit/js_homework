const btn = document.querySelector('#evaluate_day_btn');
const input = document.querySelector('#day');
const answer = document.querySelector('#answer');

/* UŽDUOTIS: sukurkite returnDay funkciją
1) Ši funkcija kaip parametrą priims vieną skaičių ir grąžins kuri tai savaitės 
diena - 1 - Pirmadienis, 2 - Antradienis, etc. Jei skaičius mažesnis nei 1 arba
didesnis nei 7 funkcija gražina null (Pasistengti apsieiti if'ų)

Patarimas: Išsisaugokite dienas masyve ir susiekite parametrą su indeksu,
 arba objekte ir skaičius naudokite kaip raktą. 
 Tuomet priklausomai nuo parametro paduoto į funkciją gražinkite dieną.

 Teisingai atlikus HTML'e įvedus skaičių ir paspaudus mygtuką matysite teisingą
 atsakymą
*/

// KODAS PRASIDEDA ČIA

function returnDay() {}

// BAIGIASI ČIA

btn.addEventListener('click', () => {
	const day = returnDay(parseInt(input.value));
	answer.innerText = day ? day : 'Tokios dienos nėra';
});
