const answer = document.querySelector('#answer');

let instructor = {
	name: 'Elie',
	additionalData: {
		instructor: true,
		favoriteHobbies: [ 'Playing Cello', 'Tennis', 'Coding' ],
		moreDetails: {
			favoriteBasketballTeam: 'New York Knicks',
			numberOfSiblings: 3,
			isYoungest: true,
			hometown: {
				city: 'West Orange',
				state: 'NJ'
			},
			citiesLivedIn: [ 'Seattle', 'Providence', 'New York' ]
		}
	}
};

/* 
DUOTA: kintamasis instructor su duomenimis
UŽDUOTIS: Pakeisti kintamąjį message taip, kad 
sakytų Hello, my name is (instruktorės vardas), my favourite basketball team
is (...instruktorės mėgstamiausia krepšinio komanda...), I have 
(...siblings skaičius...) siblings,the last city I've lived in was (...) 
(Įsivaizduokite, kad paskutinis miestas masyve ir yra paskutinis, kuriame gyveno)
Patartina naudoti `` - template literals sintaksę;
Gerai atlikę ekrane atsidarę index.html matysite savo žinutę
*/

// KODAS PRASIDEDA ČIA
const message = '';
// BAIGIASI ČIA
answer.innerText = message;
