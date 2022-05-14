const answer = document.querySelector('#answer');

const fitBitData = {
	todaySteps: 14441,
	totalMiles: 220,
	avgCalorieBurn: 5755,
	hasWorkedOutThisWeek: false,

	monthlyData: {
		january: {
			totalSteps: 55332,
			avgCalorieBurn: 6331,
			workoutDays: '10/30',
			achievedBadges: [ 'Great Runner', 'Consistant' ]
		},
		february: {
			totalSteps: 64333,
			avgCalorieBurn: 7331,
			workoutDays: '14/30',
			achievedBadges: []
		}
	}
};

/* 
DUOTA: fitBitData objektas su bendrais duomenimis ir 2 mėnesių duomenimis
UŽDUOTIS: 
(1 Dalis - atnaujinti informaciją) - 
1.1 Pakeiskite hasWorkedOutThisWeek property į true, 
1.2 Pakeiskite februray mėnesio workoutDays property į "16/20", 
1.3 pridėkite naują badge "More than half" į vasario mėnesio achievedBadges masyvą
(2 Dalis - pridėti naują informaciją)
Pridėkite naują mėnesį march, totalSteps turėtų būti 33421, avgCalorieBurn 5531,
workoutDays: '30/30', achievedBadges masyve turėtų būti vienas elementas - 
"Maximalist"
(3 Dalis - Operacijos)
3.1 Įsiveskite kintamąjį averageSteps, jo reikšmė turėtų būti trijų mėnesių averageSteps vidurkis
3.2 Įsiveskite kintamąjį allBadges, jo reikšmė turėtų būti visų mėnesių achievedBadges
sujungta į vieną stringą ir atskirta kableliais (Panaudokite metodus)

*/

// KODAS PRASIDEDA ČIA

// 3 Daliai
const averageSteps = 0;
const allBadges = '';
// BAIGIASI ČIA

answer.innerText = `In the last three months I've averaged ${averageSteps} steps and achieved ${allBadges} badges`;
