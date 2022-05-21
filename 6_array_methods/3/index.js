/* UŽDUOTIS - perrašykite duotas funkcijas į arrow funkcijas: 
1) Funkcija sum - priima du skaičius ir gražina jų sumą
2) Funkcija greet - priima parametrą string ir gražina "Labas, (..parametras..)"
3) Funkcija capitalize array - priima parametrą stringų masyvą ir gražina naują
masyvą, kurio visų žodžių pirma raidė bus didžioji.
capitalizeArray(['labas', 'petras', 'kazys']) - ['Labas', 'Petras', 'Kazys']

Visos funkcijos turi veikti taip pat, panaudokite implicit return 
*/

function sum(a, b) {
	return a + b
}

// KODAS PRASIDEDA ČIA
const arrowSum = ''

// BAIGIASIA ČIA

function greet(name) {
	return `Labas, ${name}`
}

// KODAS PRASIDEDA ČIA
const arrowGreet = ''

// BAIGIASIA ČIA

function capitalizeArray(arr) {
	const capitalizedArray = arr.map(function(string) {
		return string[0].toUpperCase() + string.slice(1, string.length)
	})
	return capitalizedArray
}

// console.log(capitalizeArray(['labas', 'petras', 'kazys']));

// KODAS PRASIDEDA ČIA
const arrowCapitalizeArray = ''

// BAIGIASIA ČIA
