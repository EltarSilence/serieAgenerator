console.log('Starting simulation');

var squadre = [
	//Squadra, forza/100
	new Squadra('Juventus', 89),
	new Squadra('Napoli', 85),
	new Squadra('Milan', 76),
	new Squadra('Lazio', 69),
	new Squadra('Fiorentina', 61),
	new Squadra('Frosinone', 24),
	new Squadra('Sampdoria', 58),
	new Squadra('Empoli', 35),
	new Squadra('Chievo', 25),
	new Squadra('Atalanta', 63),
	new Squadra('Genoa', 47),
	new Squadra('Udinese', 33),
	new Squadra('Torino', 57),
	new Squadra('Bologna', 37),
	new Squadra('Sassuolo', 50),
	new Squadra('Parma', 42),
	new Squadra('Cagliari', 43),
	new Squadra('SPAL', 36),
	new Squadra('Inter', 79),
	new Squadra('Roma', 70),
	//new Squadra('Brescia')
];
console.log(squadre.length + ' teams loaded');

let serieA = new Campionato(squadre);
serieA.generateSingleSeason();
/*let serieAs = [];
let serieA = null;

for (let h=0; h<500; h++){
	serieA = new Campionato(squadre);
	serieAs.push(serieA.generateSeason());
}

let gg = new Cluster(serieAs);

console.log(gg);*/
console.log(serieA);
