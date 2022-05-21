/* UŽDUOTIS - naudodami masyvų metodus ištraukite reikiamą informaciją
DUOTA - 10 atsitiktinių žmonių duomenų masyvas
1) Suraskite kiek vyrų yra masyve ir išsaugokite kintamąjame maleCount
2) Sukurkite naują masyvą listOfFullNames ir naudodami map jame išsaugokite
žmonių Vardą ir pavardę sujungtus ["Rayan Clement", ... ]
3) Panaudokit map ir suskaičiuokite vidutinį amžių (dob.age laikykime amžiumi)
ir išsaugokite kintamąjame averageAge
*/

const people = [
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Rayan',
			last: 'Clement'
		},
		location: {
			street: {
				number: 5911,
				name: 'Rue Barrème'
			},
			city: 'Limoges',
			state: 'Eure-et-Loir',
			country: 'France',
			postcode: 38437,
			coordinates: {
				latitude: '4.2646',
				longitude: '-43.1090'
			},
			timezone: {
				offset: '+4:00',
				description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
			}
		},
		email: 'rayan.clement@example.com',
		login: {
			uuid: 'c2996645-ac07-44cb-9540-c24da84402a0',
			username: 'crazybird786',
			password: 'errors',
			salt: 'NXcErXUx',
			md5: '00d49ce65a12a65c09d1e0a3be781060',
			sha1: '27f51b7582ffd98d1b13dd654ab8d8932a908a74',
			sha256: '084c99804a8a4d7734efaa46746de4e8d3af334335da30990f47330478ffa7bc'
		},
		dob: {
			date: '1952-09-30T09:12:47.273Z',
			age: 70
		},
		registered: {
			date: '2007-02-07T01:03:24.599Z',
			age: 15
		},
		phone: '04-52-20-16-00',
		cell: '06-67-11-19-96',
		id: {
			name: 'INSEE',
			value: '1NNaN85107910 62'
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/83.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/83.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
		},
		nat: 'FR'
	},
	{
		gender: 'female',
		name: {
			title: 'Miss',
			first: 'آنیتا',
			last: 'نجاتی'
		},
		location: {
			street: {
				number: 1072,
				name: 'امیرکبیر'
			},
			city: 'ساری',
			state: 'تهران',
			country: 'Iran',
			postcode: 74779,
			coordinates: {
				latitude: '-86.3009',
				longitude: '51.3158'
			},
			timezone: {
				offset: '+5:30',
				description: 'Bombay, Calcutta, Madras, New Delhi'
			}
		},
		email: 'anyt.njty@example.com',
		login: {
			uuid: 'c222efae-920b-4f20-95a8-0b3b1273bd95',
			username: 'purpleladybug940',
			password: 'clarence',
			salt: 'ZLuAnjcP',
			md5: '8cf356fb6db61956cbc1f7b76170f031',
			sha1: '53e1aab81c08a0facc99ecfdf304795e95c1c365',
			sha256: 'c04494bd9b018fe13b9cab50f9229ba03081f6101b2909a49c8e646b0c88e316'
		},
		dob: {
			date: '1962-05-02T22:35:59.974Z',
			age: 60
		},
		registered: {
			date: '2005-06-28T20:41:20.782Z',
			age: 17
		},
		phone: '021-77286879',
		cell: '0953-185-2873',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/57.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/57.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/57.jpg'
		},
		nat: 'IR'
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'پارمیس',
			last: 'نكو نظر'
		},
		location: {
			street: {
				number: 4907,
				name: 'میدان استقلال'
			},
			city: 'ورامین',
			state: 'کردستان',
			country: 'Iran',
			postcode: 58835,
			coordinates: {
				latitude: '-13.3940',
				longitude: '-101.5872'
			},
			timezone: {
				offset: '-6:00',
				description: 'Central Time (US & Canada), Mexico City'
			}
		},
		email: 'prmys.nkwnzr@example.com',
		login: {
			uuid: '20a3a7e5-2942-4cc4-9adc-e863e83dc5bd',
			username: 'yellowelephant667',
			password: 'jill',
			salt: 'I7Mrrj4j',
			md5: 'c9a0049c8f6bfc7750c861bc37104c0b',
			sha1: '2dee402b2970f775e03522dd6ec241c6814eae77',
			sha256: '25e697617d7b6aa5a2064d92dcca716e0bc620003027a6c488034c53513b4c58'
		},
		dob: {
			date: '1970-07-08T13:33:21.585Z',
			age: 52
		},
		registered: {
			date: '2006-04-14T13:37:07.682Z',
			age: 16
		},
		phone: '070-05704104',
		cell: '0937-481-0835',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/95.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/95.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/95.jpg'
		},
		nat: 'IR'
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Gavina',
			last: 'Rodrigues'
		},
		location: {
			street: {
				number: 4999,
				name: 'Rua Pará '
			},
			city: 'Jaú',
			state: 'Sergipe',
			country: 'Brazil',
			postcode: 79133,
			coordinates: {
				latitude: '60.2021',
				longitude: '81.0483'
			},
			timezone: {
				offset: '+7:00',
				description: 'Bangkok, Hanoi, Jakarta'
			}
		},
		email: 'gavina.rodrigues@example.com',
		login: {
			uuid: 'e37adc88-fa44-42e2-bf3a-73fb118c0721',
			username: 'happymouse867',
			password: 'becker',
			salt: '8ZI31a8n',
			md5: '6c3a16c504c9792b1a7d256fc91a3938',
			sha1: '4863b81c782faa6e56ab7a4694b3f437b8c60324',
			sha256: '87d3162f5b523e61b8c58a376a0d4169818bdaa2751ba51ec11ea992d6940b1a'
		},
		dob: {
			date: '1975-05-16T04:25:33.641Z',
			age: 47
		},
		registered: {
			date: '2018-06-19T17:02:52.450Z',
			age: 4
		},
		phone: '(27) 6011-2158',
		cell: '(90) 5506-2335',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/63.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/63.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'
		},
		nat: 'BR'
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'De Assis',
			last: 'Ramos'
		},
		location: {
			street: {
				number: 1720,
				name: 'Avenida da Democracia'
			},
			city: 'São José',
			state: 'Mato Grosso',
			country: 'Brazil',
			postcode: 39511,
			coordinates: {
				latitude: '-5.6734',
				longitude: '-49.8014'
			},
			timezone: {
				offset: '-4:00',
				description: 'Atlantic Time (Canada), Caracas, La Paz'
			}
		},
		email: 'deassis.ramos@example.com',
		login: {
			uuid: 'c7d31c59-1d5d-4cc7-b7ec-fd8ed0f316ad',
			username: 'silverladybug805',
			password: 'mayhem',
			salt: '0tm4CBfC',
			md5: '15f8aab40ac6ba0e8b2922399971e3f3',
			sha1: 'b3101fdbf0b78761e68515e79f2caffcaaea17a5',
			sha256: 'e03e5d298289231644d8afd707fbf6e6629e5df1d1eb0f6ebb634ec69a61c377'
		},
		dob: {
			date: '1995-07-15T09:05:58.238Z',
			age: 27
		},
		registered: {
			date: '2009-11-22T08:34:50.557Z',
			age: 13
		},
		phone: '(99) 9926-7366',
		cell: '(06) 5443-6922',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/99.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/99.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/99.jpg'
		},
		nat: 'BR'
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Ilja',
			last: 'Krapp'
		},
		location: {
			street: {
				number: 6584,
				name: 'Schillerstraße'
			},
			city: 'Hoyerswerda',
			state: 'Berlin',
			country: 'Germany',
			postcode: 18795,
			coordinates: {
				latitude: '12.2147',
				longitude: '153.9349'
			},
			timezone: {
				offset: '+6:00',
				description: 'Almaty, Dhaka, Colombo'
			}
		},
		email: 'ilja.krapp@example.com',
		login: {
			uuid: 'a4ba0223-19ef-4089-8a46-59034c420d65',
			username: 'brownleopard137',
			password: 'hover',
			salt: '06gBlwz2',
			md5: '04006e7d3343c6b82fdb299a4a74f427',
			sha1: '6e36e5076ac0658c0513ff2058c63f1bd13dc044',
			sha256: 'c90e15a2390e3d2f3ebca917afaa7652b25724a9a9bf277f5b7b6f5d8b37d1fb'
		},
		dob: {
			date: '1974-10-08T01:12:59.849Z',
			age: 48
		},
		registered: {
			date: '2016-08-15T02:01:08.256Z',
			age: 6
		},
		phone: '0927-6182044',
		cell: '0173-9744071',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/58.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/58.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/58.jpg'
		},
		nat: 'DE'
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Abigail',
			last: 'Ambrose'
		},
		location: {
			street: {
				number: 5300,
				name: 'Brock Rd'
			},
			city: 'Georgetown',
			state: 'Alberta',
			country: 'Canada',
			postcode: 'M6U 8V0',
			coordinates: {
				latitude: '88.9437',
				longitude: '-66.2160'
			},
			timezone: {
				offset: '+10:00',
				description: 'Eastern Australia, Guam, Vladivostok'
			}
		},
		email: 'abigail.ambrose@example.com',
		login: {
			uuid: '3e77179c-7cf7-4fff-be3b-b5aa1a8776af',
			username: 'goldenbird169',
			password: 'charter',
			salt: '0cwv84tg',
			md5: '6df3c4aad40f00974ae17ed6a49e1c57',
			sha1: 'cc889dd8ed96d39c9e631bbbe443c6ceaf7ee375',
			sha256: '1aa0906e40fd22f73cc3269a59561631a0cb6d5c14259011adcd11179c703349'
		},
		dob: {
			date: '1982-03-27T07:28:26.485Z',
			age: 40
		},
		registered: {
			date: '2012-01-02T21:20:43.202Z',
			age: 10
		},
		phone: '136-759-1795',
		cell: '590-808-2339',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/15.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg'
		},
		nat: 'CA'
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Vincent',
			last: 'Chu'
		},
		location: {
			street: {
				number: 2056,
				name: 'Queen St'
			},
			city: 'Red Rock',
			state: 'Northwest Territories',
			country: 'Canada',
			postcode: 'X9J 2E1',
			coordinates: {
				latitude: '-36.3622',
				longitude: '-99.2250'
			},
			timezone: {
				offset: '+6:00',
				description: 'Almaty, Dhaka, Colombo'
			}
		},
		email: 'vincent.chu@example.com',
		login: {
			uuid: '4577cad6-21fe-4173-96d7-3808d9e4ba2e',
			username: 'bigkoala395',
			password: 'vh5150',
			salt: '0NaDGIUj',
			md5: 'f872f4901091651585e8ed48c9734d87',
			sha1: '959242f5d47be7c8ba19db87a41d9d3990825e34',
			sha256: '7a472eb8f3ac60afd1b14dbe8630c94e0e6119d2784da19c4f8e0519b3576d55'
		},
		dob: {
			date: '1990-07-10T10:04:24.359Z',
			age: 32
		},
		registered: {
			date: '2015-03-12T17:53:04.134Z',
			age: 7
		},
		phone: '533-478-1684',
		cell: '032-011-3634',
		id: {
			name: '',
			value: null
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/42.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/42.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/42.jpg'
		},
		nat: 'CA'
	},
	{
		gender: 'female',
		name: {
			title: 'Miss',
			first: 'Heather',
			last: 'Austin'
		},
		location: {
			street: {
				number: 2864,
				name: 'Park Road'
			},
			city: 'Kilkenny',
			state: 'Westmeath',
			country: 'Ireland',
			postcode: 35905,
			coordinates: {
				latitude: '-52.7799',
				longitude: '-158.8490'
			},
			timezone: {
				offset: '+4:00',
				description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
			}
		},
		email: 'heather.austin@example.com',
		login: {
			uuid: '675fb660-b229-400c-b835-0af055fe5135',
			username: 'brownrabbit379',
			password: 'robot',
			salt: 'ZNBA6NvN',
			md5: '77888c66507a7bfbafa9b0d41d4926cb',
			sha1: '99067baaaf64d4afc446c1be867b306f2a7acb93',
			sha256: '58f469a1ae37b896e130ef105d0e58b5bb7c01ce2814237da1fae217b84efa54'
		},
		dob: {
			date: '1954-01-26T16:37:07.217Z',
			age: 68
		},
		registered: {
			date: '2019-09-09T21:33:20.206Z',
			age: 3
		},
		phone: '011-828-1535',
		cell: '081-327-2948',
		id: {
			name: 'PPS',
			value: '0321718T'
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/53.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/53.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/53.jpg'
		},
		nat: 'IE'
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Ayub',
			last: 'Risvik'
		},
		location: {
			street: {
				number: 8012,
				name: 'Oscar Dahls vei'
			},
			city: 'Fjellsrud',
			state: 'Sør-Trøndelag',
			country: 'Norway',
			postcode: '9482',
			coordinates: {
				latitude: '-76.9096',
				longitude: '-152.2736'
			},
			timezone: {
				offset: '+5:45',
				description: 'Kathmandu'
			}
		},
		email: 'ayub.risvik@example.com',
		login: {
			uuid: 'b8216bc8-f2be-488f-8c0d-455f7acdd013',
			username: 'heavyswan356',
			password: '753951',
			salt: 'PkuBp5z8',
			md5: 'cbeafacf30cefec11364ced44b1b66ca',
			sha1: 'b1c73aae18a3e5a0c2ea95f84ba9e52642d7bf5b',
			sha256: 'ead5848d01bea8afa55ff75750f6b71c9997a1d9b4b975ce8a97d94add365ea8'
		},
		dob: {
			date: '1969-04-14T03:38:36.427Z',
			age: 53
		},
		registered: {
			date: '2011-04-24T15:31:49.669Z',
			age: 11
		},
		phone: '89260571',
		cell: '44029626',
		id: {
			name: 'FN',
			value: '14046916191'
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/63.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/63.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/63.jpg'
		},
		nat: 'NO'
	}
]

// KODAS PRASIDEDA ČIA

// BAIGIASI ČIA
