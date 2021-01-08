var grid = [
	[" ", " F", "", " ", " ", " ", " ", " ", " ", " "], // INDEX 0 DE LA VARIABLE GRID
	[" ", " f", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 1
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 2
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 3
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 4
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 5
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 6 
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 7 
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "], // INDEX 8
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]   // INDEX 9
];
// console.log(grid[0][1]);  CE CONSOLE.LOG DOIT M'AFFICHER f

var rover = {
	direction: "N", //ATTENTION  JE DOIS METTRE 2 POINT PAS DE SIGNE EGALE ENTRE LA CLE ET LA PROPRIETE ET UNE VIRGULE A LA FIN
	x: 0, // COLONNE abcisse
	y: 1, // LIGNE ordonnée
}

function turnRight(robot) {
	// SI LA DIRECTION DU  ROBOT EST AU NORD ALORS IL IRA A L EST 
	if (rover.direction === "N") {
		rover.direction = "E";
	}
	// SI LA DIRECTION DU  ROBOT EST A L'EST ALORS IL IRA AU SUD 
	else if (rover.direction === "E") {
		rover.direction = "S";
	}
	// SI LA DIRECTION DU  ROBOT AU A SUD ALORS IL IRA A L'OUEST 
	else if (rover.direction === "S") {
		rover.direction = "W";
	}
	// SI LA DIRECTION DU  ROBOT AU A L'OUEST ALORS IL IRA AU NORD 
	else if (rover.direction === "W") {
		rover.direction = "N";
	}
	//console.log(rover);
}
turnRight(rover);
turnRight(rover);
turnRight(rover);
turnRight(rover); // LE ROVER DOIT NORMALENT FAIR UN TOUR SUR SOI

function turnLeft(robot) {
	// SI LA DIRECTION DU  ROBOT EST AU NORD ALORS IL IRA A L OUEST 
	if (rover.direction === "N") {
		rover.direction = "W";
	}
	// SI LA DIRECTION DU  ROBOT EST A L'OUEST ALORS IL IRA AU SUD 
	else if (rover.direction === "W") {
		rover.direction = "S";
	}
	// SI LA DIRECTION DU  ROBOT AU A SUD ALORS IL IRA A L'EST 
	else if (rover.direction === "S") {
		rover.direction = "E";
	}
	// SI LA DIRECTION DU  ROBOT AU A L'EST ALORS IL IRA AU NORD 
	else if (rover.direction === "E") {
		rover.direction = "N";
	}
	//console.log(rover);
}
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);
turnLeft(rover); // LE ROVER DOIT NORMALENT FAIR UN TOUR SUR SOI 

function moveForward(robot) {
	//SI LA DIRECTION DU ROVER EST AU NORD ALORS IL AURA 2 OPTIONS
	//SOIT IL NE BOUGERA PAS CAR IL SE TROUVE A L'EXTREMITE NORD C EST A DIRE L'INDEX O DE L'ORDONEE 
	// SINON IL FERA UN PAS EN DIRECTION DU NORD SUR L'AXE ORDONNEE C'EST A DIRE -1
	if (rover.direction === "N") {
		if (rover.x === 0) {
			console.log("SI TU MONTE TU SORS DE LA ZONE")
		} else {
			rover.y = rover.y - 1
		}
	}
	//SI LA DIRECTION DU ROVER EST A L'EST ALORS IL AURA 2 OPTIONS
	//SOIT IL NE BOUGERA PAS CAR IL SE TROUVE A L'EXTREMITE EST C EST A DIRE L'INDEX 9 DE L'ABCISSE 
	// SINON IL FERA UN PAS EN DIRECTION DE L'EST SUR L'AXE ABCISSE C'EST A DIRE +1
	else if (rover.direction === "E") {
		if (rover.y > 9) {
			console.log("SI TU AVANCE TU SORS DE LA ZONE")
		} else {
			rover.x = rover.x + 1
		}
	}
	//SI LA DIRECTION DU ROVER EST AU SUD ALORS IL AURA 2 OPTIONS
	//SOIT IL NE BOUGERA PAS CAR IL SE TROUVE A L'EXTREMITE SUD C EST A DIRE L'INDEX 9 DE L'ORDONNE 
	// SINON IL FERA UN PAS EN DIRECTION DU SUD SUR L'AXE ORDONNEE C'EST A DIRE +1
	else if (rover.direction === "S") {
		if (rover.x > 9) {
			console.log("SI TU DESCENDS TU SORS DE LA ZONE")
		} else {
			rover.y = rover.y + 1
		}
	}
	//SI LA DIRECTION DU ROVER EST A L'OUEST ALORS IL AURA 2 OPTIONS
	//SOIT IL NE BOUGERA PAS CAR IL SE TROUVE A L'EXTREMITE OUEST C EST A DIRE L'INDEX 0 DE L'AXE DES ABCISSES 
	// SINON IL FERA UN PAS EN DIRECTION DE L'OUEST SUR L'AXE DES ABCISSES C'EST A DIRE -1
	else if (rover.direction === "W") {
		if (rover.y === 0) {
			console.log("SI TU RECULE TU SORS DE LA ZONE")
		} else {
			rover.x = rover.x - 1
		}
	}
	console.log(rover)
}

turnLeft(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
console.log(rover)

  