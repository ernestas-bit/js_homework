const fetchPeople = async () => {
	return await (await fetch('https://random-data-api.com/api/users/random_user?size=10')).json()
}

const createCard = (imgSrc, fullName) => {
	const card = document.createElement('div')
	card.classList.add('card')
	const img = document.createElement('img')
	img.setAttribute(
		'src',
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(
			Math.random() * 100
		)}.svg`
	)
	card.append(img)
	const h4 = document.createElement('h4')
	h4.innerText = fullName
	card.append(h4)
	const btn = document.createElement('btn')
	btn.classList.add('btn')
	btn.innerText = 'Delete'
	card.append(btn)
	return card
}

const generateCards = async () => {
	const people = await fetchPeople()
	for (let person of people) {
		container.append(createCard(person.avatar, `${person.first_name} ${person.last_name}`))
	}
}
