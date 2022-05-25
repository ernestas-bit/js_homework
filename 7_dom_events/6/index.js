/* UŽDUOTIS - padarykite paiešką žmonių kortelėms esančioms HTML'e 
1) Paselectinkite visus h4 (būtinai padarykite iš jų tikrą masyvą)
const cards = Array.from(document... selectorius)
2) Uždėkite searchui 'input' event listenerį 
3) Event'o funkcijos viduje iteruokite per korteles ir uždėkite klasę hidden 
tom's kortelėms(ne h4'ams), kurių h4 tekst'as neincludina search'o value, 
o kitoms nuimkite
*/

const h4s = Array.from(document.querySelectorAll('h4'))
const search = document.querySelector('#search')
search.addEventListener('input', () => {
	for (let h4 of h4s) {
		const isCardShown = !h4.innerText.toLowerCase().includes(search.value.toLowerCase())
		isCardShown ? h4.parentElement.classList.add('hidden') : h4.parentElement.classList.remove('hidden')
	}
})
