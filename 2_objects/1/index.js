const answer = document.querySelector('#answer');

/* 
UŽDUOTIS:
Turime person objekto kintamąjį, įdėkite į jį raktą name su kokia norite  tekstine 
verte, įdėkite raktą age su skaitine verte, įdėkite į jį raktą hobbies,
kurio vertė turi būti masyvas tekstinių verčių (bent 3 hobiai).
Teisingai atlikus atsidarę index.html matysite rezultatą
*/

// JŪSŲ KODAS PRASIDEDA ČIA
const person = {};
// BAIGIASI ČIA

const message = `Hello, my name is ${person.name}, I am ${person.age} years old, I enjoy ${person.hobbies?.join(
	', '
)} in my free time`;

answer.innerText = message;
