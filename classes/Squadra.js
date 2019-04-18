console.log("Squadra.js loaded");

class Squadra {
	constructor(nome, strength, punti, diff_reti, gf, gs, v, p, s){
		this.nome = nome;
		this.strength = strength;
		this.punti = 0;
		this.diff_reti = 0;
		this.gf = 0;
		this.gs = 0;
		this.v = 0;
		this.p = 0;
		this.s = 0;
	}

	matchWon(){
		this.punti += 3;
	}

	matchDraw(){
		this.punti += 1;
	}
}