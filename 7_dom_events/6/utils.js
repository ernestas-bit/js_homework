;(function() {
	const container = document.querySelector('#container')
	for (let person of data) {
		const card = document.createElement('card')
		card.classList.add('card')
		const img = document.createElement('img')
		img.setAttribute('src', person.picture.medium)
		card.append(img)
		const h4 = document.createElement('h4')
		h4.innerText = `${person.name.first} ${person.name.last}`
		card.append(h4)
		container.append(card)
	}
})()
