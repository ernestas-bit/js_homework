// console.log(people)
/* UŽDUOTIS - naudodami map metodą sukurkite kiekvienam elementui po kortelę
HTML'e
DUOTA - 1) people masyvas su duomenimis (data.js)
        2) HTML'o vienos kortelės pavyzdys
        2.1) Atkreipkite dėmesį kokie duomenys sudėti pavyzdyje
        imageSrc - medium image iš duomenų, o alt - pavardė.

UŽDUOTIS - 1) Sukurkite funkciją createCard, kuri priims keturis parametrus -
imageSrc, imageAlt, fullName, email
1.1) Ši funkcija turėtų sukurti div'ą su klasę card ir sudėti 
į ją atitinkamus elementus(kaip pavyzdyje index.html) su duomenimis iš parametrų.
IR gražinti sukurtą divą.

function createCard(imageSrc, ...) {
  const card = document.createElement('div');
  div.classList.add('card')
  const img = document.createElement('img');
  img.setAttribute('src', imageSrc - pasiims iš parametro)
  card.append(img)
  etc..
}

2) Sukurkite kintamąjį cards
2.1) Šiame kintamąjame išsaugokite naują masyvą naudodami map funkciją ant 
people masyvo, ir kiekvienam elementui pakvieskite createCard funkciją su 
atitinkamais duomenimis iš people masyvo 

const cards = people.map(function(person) {
    return createCard(pasiekiamPersonImageSrc, etc...)
})

3) Iteruojame per cards masyvą su bet kuriuo ciklu ir įdedam card į divą
su id "container"

*/
