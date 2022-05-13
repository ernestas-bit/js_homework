export const listOfNames = [
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
];

export const generateListOfNames = (length) => {
	let names = [];
	for (let i = 0; i <= length; i++) {
		const randomIndex = Math.floor(Math.random() * listOfNames.length);
		names.push(listOfNames[randomIndex]);
	}
	return names;
};

export const getRandomName = () => listOfNames[Math.floor(Math.random() * listOfNames.length)];
