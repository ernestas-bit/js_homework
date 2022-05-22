/* UŽDUOTIS - ištrinti kortelę paspaudus delete mygtuką
1) Parašykite selektorių, kuris paselectins visus mygtukus su klase "btn" ir
priskirkite ją jau sukurtam kintamąjam buttons
2) Ištrinkite btn tėvinį elementą
Gerai atlikus užduotį paspaudus delete HTML'e - kortelė išnyks
*/
const container = document.querySelector('#container')

const init = async () => {
	await generateCards()

	// 1 Dalis - KODAS PRASIDEDA ČIA
	const buttons = []
	// BAIGIASI ČIA

	for (let btn of buttons) {
		btn.addEventListener('click', () => {
			// 2 Dalis - KODAS PRASIDEDA ČIA
			// BAIGIASI ČIA
		})
	}
}
init()
