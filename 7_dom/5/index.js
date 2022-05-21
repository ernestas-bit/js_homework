/* UŽDUOTIS - sudėti į html atsitikinius pokemonų paveikslėlius
DUOTA - funkcija getRandomPokemonImgSrc, kuri kaip parametrą priims atsitiktinį 
skaičių nuo 1 iki 100 ir gražins src į pokemono paveikslėlį. 
1) Sukurkite ciklą, kuris suksis 25 kartus 
2) Ciklo viduje sukurkite img tag'ą, ir uždėkite jam atsitiktinį src naudodami
duotą funkcija
2.1) Uždėkite img'ui height ir width po 100px
2.2) Įdėkite img'ą į elementą su id "container" (jis jau yra HTML'e)
2.3) Kas antrą image apverskite aukštyn kojom.

*/

const getRandomPokemonImgSrc = (num) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`

// KODAS PRASIDEDA ČIA

// BAIGIASI ČIA
