console.log("Campionato.js loaded");

class Campionato {


	constructor (squadre = [], goals){
		this.squadre = squadre;
		this.goals = 0;
		this.vincitore = null;
		this.clf = [];
		this.champions = [];
		this.europa;
		this.eurqual;
		this.retrocesse = [];
		this.homeWins = 0;
		this.awayWins = 0;
	}

	generateSingleSeason() {
		let serieA = new Campionato(squadre);
		let results = '';
		let match_n = 1;

		for (let i=0; i<squadre.length; i++){
			for (let j=0; j<squadre.length; j++){
				if (squadre[i] == squadre[j]) continue; //per evitare Juve - Juve
				let triplet = generateTriplet(squadre[i].strength, squadre[j].strength);
				let partita = new Partita(squadre[i], squadre[j], triplet[0], triplet[1], triplet[2]);
				partita.computeGoals();
				results += partita.t1.nome+'-'+partita.t2.nome+' ('+partita.g1+'-'+partita.g2+'), ';
				match_n%10==0? results+= '<br>' : results;
				this.goals+=partita.g1+partita.g2;
				partita.g1 > partita.g2 ? this.homeWins++ : this.homeWins;
				partita.g1 < partita.g2 ? this.awayWins++ : this.awayWins;
				match_n++;
			}
		}
		this.vincitore = serieA.classifica()[0].nome;

		for (var p = 0; p < serieA.classifica().length; p++) {
			if (p<4) 
				this.champions.push(serieA.classifica()[p].nome);
			if (p==4)
				this.europa = serieA.classifica()[p].nome;
			if (p==5)
				this.eurqual = serieA.classifica()[p].nome;
			if (p>16)
				this.retrocesse.push(serieA.classifica()[p].nome);
			this.clf.push(serieA.classifica()[p].nome);
		}

		var row = '';
		let n_sq = serieA.squadre.length;
		var tot_giornate = 2*(n_sq-1);
		var tot_partite = tot_giornate * (n_sq/2);
		for (let k=0; k<serieA.classifica().length; k++){
			row += '<tr>';
			row += '<td>'+(k+1)+'</td>';
			row += '<td>'+serieA.classifica()[k].nome+'</td>';
			row += '<td>'+serieA.classifica()[k].punti+'</td>';
			row += '<td>'+serieA.classifica()[k].gf+':'+serieA.classifica()[k].gs+'</td>';
			row += '<td>'+serieA.classifica()[k].diff_reti+'</td>';
			row += '<td>'+serieA.classifica()[k].v+'</td>';
			row += '<td>'+serieA.classifica()[k].p+'</td>';
			row += '<td>'+serieA.classifica()[k].s+'</td>';
			row += '<td>'+calcGFPM(serieA.classifica()[k], tot_giornate)+'</td>';
			row += '<td>'+calcGSPM(serieA.classifica()[k], tot_giornate)+'</td>';
			row += '</tr>';
		}
		document.getElementById('classifica').innerHTML += row;

		var descrizione = 'Generate ' + tot_partite + ' partite tra ' + n_sq + ' squadre';
		document.getElementById('log').innerHTML += descrizione;
		document.getElementById('totgls').innerHTML += this.goals + ' ('+ Math.round(this.goals/tot_partite * 100) / 100 +' a partita)';
		document.getElementById('results').innerHTML += results;

		return this;
	}

	generateSeason(){
		let serieA = new Campionato(squadre);
		let results = '';
		let match_n = 1;

		for (let i=0; i<squadre.length; i++){
			for (let j=0; j<squadre.length; j++){
				if (squadre[i] == squadre[j]) continue; //per evitare Juve - Juve
				let triplet = generateTriplet(squadre[i].strength, squadre[j].strength);
				let partita = new Partita(squadre[i], squadre[j], triplet[0], triplet[1], triplet[2]);
				partita.computeGoals();
				results += partita.t1.nome+'-'+partita.t2.nome+' ('+partita.g1+'-'+partita.g2+'), ';
				match_n%10==0? results+= '<br>' : results;
				this.goals+=partita.g1+partita.g2;
				partita.g1 > partita.g2 ? this.homeWins++ : this.homeWins;
				partita.g1 < partita.g2 ? this.awayWins++ : this.awayWins;
				match_n++;
			}
		}
		this.vincitore = serieA.classifica()[0].nome;

		for (var p = 0; p < serieA.classifica().length; p++) {
			if (p<4) 
				this.champions.push(serieA.classifica()[p].nome);
			if (p==4)
				this.europa = serieA.classifica()[p].nome;
			if (p==5)
				this.eurqual = serieA.classifica()[p].nome;
			if (p>16)
				this.retrocesse.push(serieA.classifica()[p].nome);
			this.clf.push(serieA.classifica()[p].nome);
		}
		return this;
	}

	classifica (){
		//multisort(cosa, criterio]
		const criteria = ['punti', 'diff_reti', 'gf', 'v'];
		return multisort(this.squadre, criteria).reverse();
	}
}