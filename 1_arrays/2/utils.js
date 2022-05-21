const listOfRandomNames = [
	'Ruth',
	'Jackson',
	'Debra',
	'Allen',
	'Gerald',
	'Harris',
	'Raymond',
	'Carter',
	'Jacqueline',
	'Torres',
	'Joseph',
	'Nelson',
	'Carlos',
	'Sanchez',
	'Ralph',
	'Clark',
	'Jean',
	'Alexander',
	'Stephen',
	'Roberts',
	'Eric',
	'Long',
	'Amanda',
	'Scott',
	'Teresa',
	'Diaz',
	'Wanda',
	'Thomas'
]

const generateListOfNames = (length) => {
	let names = []
	for (let i = 0; i <= length; i++) {
		const randomIndex = Math.floor(Math.random() * listOfRandomNames.length)
		names.push(listOfRandomNames[randomIndex])
	}
	return names
}

const getRandomName = () => listOfRandomNames[Math.floor(Math.random() * listOfRandomNames.length)]
