function calcGFPM (team, tot_giornate) {
	return Math.round(team.gf/tot_giornate * 100) / 100;
}

function calcGSPM (team, tot_giornate) {
	return Math.round(team.gs/tot_giornate * 100) / 100;
}

function howManyWins (team, cluster) {
	var camp = null;
	var wins = 0;
	for (var b = 0; b < cluster.campionati.length; b++) {
		camp = cluster.campionati[b];
		camp.vincitore == team ? wins++ : wins;
	}
	return wins;
}