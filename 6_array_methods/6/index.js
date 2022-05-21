/* UŽDUOTIS - ištraukite duomenis iš masyvo

DUOTA: - data masyvas su klausimais
Sukurkite kintamąjį questions ir naudodami map jame išsaugokite naujus objektus
tik su klausimu ir teisingu atsakymu
[{question: ..., answer: ...}, {question: ..., answer: ...}]

*/

const data = [
	{
		category: 'Geography',
		type: 'multiple',
		difficulty: 'medium',
		question: 'The World Health Organization headquarters is located in which European country?',
		correct_answer: 'Switzerland',
		incorrect_answers: [ 'United Kingdom', 'France', 'Belgium' ]
	},
	{
		category: 'Entertainment: Music',
		type: 'multiple',
		difficulty: 'medium',
		question: 'Which of the following bands is Tom DeLonge not a part of?',
		correct_answer: '+44',
		incorrect_answers: [ 'Box Car Racer', 'Blink-182', 'Angels &amp; Airwaves' ]
	},
	{
		category: 'Entertainment: Cartoon & Animations',
		type: 'multiple',
		difficulty: 'medium',
		question: 'In &quot;The Amazing World of Gumball&quot;, who is the principal of Elmore Junior High?',
		correct_answer: 'Principal Brown',
		incorrect_answers: [ 'Principal Small', 'Principal Brawn', 'Principal Simeon' ]
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'How many sides does a heptagon have?',
		correct_answer: '7',
		incorrect_answers: [ '8', '6', '5' ]
	},
	{
		category: 'Entertainment: Japanese Anime & Manga',
		type: 'multiple',
		difficulty: 'medium',
		question:
			'In &quot;JoJo&#039;s Bizarre Adventure&quot;, which of the following Stands does NOT have a time-based ability?',
		correct_answer: '20th Century Boy',
		incorrect_answers: [ 'Made in Heaven', 'Star Platinum', 'The World' ]
	},
	{
		category: 'Entertainment: Video Games',
		type: 'multiple',
		difficulty: 'medium',
		question: 'Which of these is not a DLC vehicle in &quot;Mario Kart 8&quot;?',
		correct_answer: 'Wild Wiggler',
		incorrect_answers: [ 'Bone Rattler', 'B Dasher', '300 SL Roadster' ]
	},
	{
		category: 'Science: Gadgets',
		type: 'multiple',
		difficulty: 'medium',
		question: 'What is the &quot;Mitsubishi Wakamaru&quot;?',
		correct_answer: 'A robot',
		incorrect_answers: [ 'A pickup truck', 'An motorcycle', 'A motorboat' ]
	},
	{
		category: 'General Knowledge',
		type: 'multiple',
		difficulty: 'easy',
		question: 'Earth is located in which galaxy?',
		correct_answer: 'The Milky Way Galaxy',
		incorrect_answers: [ 'The Mars Galaxy', 'The Galaxy Note', 'The Black Hole' ]
	},
	{
		category: 'Entertainment: Film',
		type: 'multiple',
		difficulty: 'medium',
		question: 'What is the birth name of Michael Keaton?',
		correct_answer: 'Michael Douglas',
		incorrect_answers: [ 'Michael Fox', 'Michael Richards', 'Michael Kane' ]
	},
	{
		category: 'General Knowledge',
		type: 'multiple',
		difficulty: 'easy',
		question: 'In aerodynamics, which force pushes an object upwards?',
		correct_answer: 'Lift',
		incorrect_answers: [ 'Drag', 'Weight', 'Thrust' ]
	}
]

// KODAS PRASIDEDA ČIA
const questions = []

// BAIGIASI ČIA
