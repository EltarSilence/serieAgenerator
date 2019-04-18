console.log("Partita.js loaded");

var max_goals = 3;

function generateTriplet(str1, str2){
	//genera p1, px e p2

	//es Sampdoria - Milan
	//52 vs 75 abs(52-75) = y = 23

	//DISTRIBUZIONE
	//se 0 > y > 10 sq. equilibrate 40, 20, 40
	//se 10 >= y > 20 sq. semidistanziate 55, 20, 25
	//se 20 >= y > 30 sq. circa distanziate 62, 16, 22
	//se 30 >= y > 40 sq. distanziate 75, 15, 10
	//se 40 >= y > 50 sq. molto distanziate 80, 13, 7
	//se ... y > 50 sq. super distanziate 86, 12, 2

	//ricordarsi di mettere la tripletta in ordine

	let y = Math.abs(str1 - str2);
	let firstBest = null;
	let triplet = [];
	str1 > str2 ? firstBest = true : false;

	if (y > 0 && y < 10){
		return triplet = [40, 20, 40];
	}
	if (y >=10 && y < 20){
		triplet = [55, 20, 25];
		return firstBest ? triplet : triplet.reverse();
	} 
	if (y >=20 && y < 30){
		triplet = [62, 16, 22];
		return firstBest ? triplet : triplet.reverse();
	}
	if (y >=30 && y < 40){
		triplet = [75, 15, 10];
		return firstBest ? triplet : triplet.reverse();
	}
	if (y >=40 && y < 50){
		triplet = [80, 13, 7];
		return firstBest ? triplet : triplet.reverse();
	}
	if (y >=50){
		triplet = [86, 12, 2];
		return firstBest ? triplet : triplet.reverse();
	}
}

class Partita {
	constructor(t1, t2, p1, px, p2, g1, g2){
		this.t1 = t1;
		this.t2 = t2;
		this.p1 = p1;
		this.px = px;
		this.p2 = p2;
		this.g1 = null;
		this.g2 = null;
	}

	computeGoals() {
		max_goals = 3;
		var supergoals = Math.floor(Math.random() * 100);
		var isSGon;
		supergoals >= 95 ? isSGon = true : false;
		isSGon ? max_goals=max_goals+3 : max_goals;

		var t = Math.floor(Math.random() * 100);
		//console.log("generato " + t + ", prob1 = " + this.p1 + ", prob2 = " + this.p2);
		if (t >= 0 && t <= this.p1){
			//vince 1
			//console.log(t + "<" + this.p1 + " quindi vince " + this.t1);
			do {
				this.g1 = Math.floor(Math.random() * max_goals);
				this.g2 = Math.floor(Math.random() * max_goals);
			} while (Number(this.g1) <= Number(this.g2));

			this.t1.matchWon(); //assegnazione 3 punti

			let dr = this.g1 - this.g2; //calcolo e asseg. diff. reti
			this.t1.diff_reti += dr;
			this.t2.diff_reti += -1*dr;

			this.t1.gf += this.g1; //calcolo e asseg. goal fatti / subiti
			this.t2.gf += this.g2;
			this.t1.gs += this.g2;
			this.t2.gs += this.g1;

			this.t1.v += 1; //+1 vittoria
			this.t2.s += 1;
		}
		if (t > this.p1 && t < Number(this.p1)+Number(this.px)){
			//pareggiano
			//console.log('pareggio');
			this.g1 = Math.floor(Math.random() * 4);
			this.g2 = this.g1;
			this.t1.matchDraw(); this.t2.matchDraw();

			this.t1.gf += this.g1; //calcolo e asseg. goal fatti / subiti
			this.t2.gf += this.g2;
			this.t1.gs += this.g2;
			this.t2.gs += this.g1;

			this.t1.p += 1; this.t2.p += 1; //+1 pareggio per entrambi
		}
		if (t >= Number(this.p1)+Number(this.px) && t <= 100){
			//vince 2
			//console.log(t + ">" + this.p1 + " quindi vince " + this.t2);
			do {
				this.g1 = Math.floor(Math.random() * max_goals);
				this.g2 = Math.floor(Math.random() * max_goals);
			} while (Number(this.g1) >= Number(this.g2));
			this.t2.matchWon();
			let dr = this.g1 - this.g2;
			this.t1.diff_reti += dr;
			this.t2.diff_reti += -1*dr;

			this.t1.gf += this.g1; //calcolo e asseg. goal fatti / subiti
			this.t2.gf += this.g2;
			this.t1.gs += this.g2;
			this.t2.gs += this.g1;

			this.t2.v += 1; //+1 vittoria
			this.t1.s += 1;
		}

	}

	toString(){
		return this.t1.nome+" - "+this.t2.nome+" ("+this.g1+"-"+this.g2+")";
	}
}