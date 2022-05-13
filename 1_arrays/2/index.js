import { generateListOfNames, getRandomName } from './utils.js';
const namesHtmlNode = document.querySelector('#names');
const randomNameHtmlNode = document.querySelector('#randomName');
const includesBtn = document.querySelector('#includes_btn');
const listOfNames = generateListOfNames(10);
const randomName = getRandomName();
namesHtmlNode.innerText = listOfNames.join(', ');
randomNameHtmlNode.innerText = randomName;

includesBtn.addEventListener('click', () => {
	/* Pakeiskite includes kintamąjį taip, 
    kad gražintų ar listOfNames masyve yra kintamasis randomName.
    Jei gerai padarysite paspaudus mygtuką tuo atveju kai 
    vardas yra vardų saraše užsidegs žaliai, o kai nėra - raudonai
    */
	// JŪSŲ KODAS PRASIDEDA ČIA
	const includes = false;
	// BAIGIASI ČIA
	includes ? randomNameHtmlNode.classList.add('bg-success') : randomNameHtmlNode.classList.add('bg-danger');
});
