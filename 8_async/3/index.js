/* UŽDUOTIS - panaudokite async/await sintaksę
DUOTA - funkcija fakeRequest, kuri priima kaip parametrą url ir
gražina Promise objektą
1) Sukurkite async funkciją getDogs()
2) Šios funkcijos viduje naudodami await pakvieskite 
fakeRequest funckiją du kartus su urls :
www.dogs.com/page1
www.dogs.com/page2 
ir reikšmę išsaugokite kintamuosiuose 
(tarkim fakeDogData1 ir fakeDogData2) ir išspausdinkite 
konsolėje. Taip pat išspausdinkite žodį("SUCCESS!")
3) Apsupkite funkcijos viduje esantį kodą try catch bloku 
4) catch blok'e pasiekite errorą ir į konsolę išspausdinkite

*/

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500
		setTimeout(() => {
			if (delay > 2000) {
				reject('Connection Timeout :(')
			} else {
				resolve(`Here is fake dog data from ${url}`)
			}
		}, delay)
	})
}

// KODAS PRASIDEDA ČIA

// BAIGIAS ČIA
