var grid = [
	[" ", " ", "c", " ", " ", " ", " ", " ", " ", " "], // INDEX 0 DE LA VARIABLE GRID
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
console.log(grid[1][1]); // CE CONSOLE.LOG DOIT M'AFFICHER f

var rover = {
	direction : "N", // ATTENTION JE DOIS METTRE 2 POINT ET ON PAS LE SIGE EGALE ENTRE LA CLE ET LA PROPRIETE
}

function turnRight(robot){
	// SI LA DIRECTION DU  ROBOT EST AU NORD ALORS IL IRA A L EST 
	if (rover.direction === "N"){
		rover.direction = "E";
	}
	// SI LA DIRECTION DU  ROBOT EST A L'EST ALORS IL IRA AU SUD 
	else if (rover.direction === "E"){
		rover.direction = "S";
	}
	// SI LA DIRECTION DU  ROBOT AU A SUD ALORS IL IRA A L'OUEST 
	else if (rover.direction === "S"){
		rover.direction = "W";
	}
	// SI LA DIRECTION DU  ROBOT AU A L'OUEST ALORS IL IRA AU NORD 
	else if (rover.direction === "W"){
		rover.direction = "N";
	}
	console.log(rover);
}
turnRight(rover);
turnRight(rover);
turnRight(rover);
turnRight(rover); // LE ROVER DOIT NORMALENT FAIR UN TOUR SUR SOI 

function turnLeft(robot){
	// SI LA DIRECTION DU  ROBOT EST AU NORD ALORS IL IRA A L OUEST 
	if (rover.direction === "N"){
		rover.direction = "W";
	}
	// SI LA DIRECTION DU  ROBOT EST A L'OUEST ALORS IL IRA AU SUD 
	else if (rover.direction === "W"){
		rover.direction = "S";
	}
	// SI LA DIRECTION DU  ROBOT AU A SUD ALORS IL IRA A L'EST 
	else if (rover.direction === "S"){
		rover.direction = "E";
	}
	// SI LA DIRECTION DU  ROBOT AU A L'EST ALORS IL IRA AU NORD 
	else if (rover.direction === "E"){
		rover.direction = "N";
	}
	console.log(rover);
}
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);
turnLeft(rover); // LE ROVER DOIT NORMALENT FAIR UN TOUR SUR SOI 