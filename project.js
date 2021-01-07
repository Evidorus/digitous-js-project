var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
var rover = { 
    direction : 'N',
    x : 0, // colonnes
    y : 0, // lignes
    travelLog : [],
};

function turnRight(rover){
    if (rover.direction === 'N'){
        rover.direction = 'E'
        return rover
    } 
    if (rover.direction === 'E'){
        rover.direction = 'S'
        return rover
    }
    if (rover.direction === 'S'){
        rover.direction = 'W'
        return rover
    }
    if (rover.direction === 'W'){
        rover.direction = 'N'
        return rover
    }  
}

function turnLeft(rover){
    if (rover.direction === 'N'){
        rover.direction = 'W'
        return rover
    } 
    if (rover.direction === 'E'){
        rover.direction = 'N'
        return rover
    }
    if (rover.direction === 'S'){
        rover.direction = 'E'
        return rover
    }
    if (rover.direction === 'W'){
        rover.direction = 'S'
        return rover
    }  
}

function moveForward(rover){
    if (rover.direction === 'N'){
        rover.y = rover.y + 1;
        return rover
    }
    if (rover.direction === 'E'){
        rover.x = rover.x + 1;
        return rover
    }
    if (rover.direction === 'S'){
        rover.y = rover.y - 1;
        return rover
    }
    if (rover.direction === 'W'){
        rover.x = rover.x - 1;
        return rover
    }
    // console.log(rover.travelLog)
}

function pilotRover(string){
    for (var i = 0; i < string.length; i++){
        if (string[i] === 'l'){
            turnLeft(rover);
            rover.travelLog.push('je tourne');
        } else if (string[i] === 'r'){
            turnRight(rover)
            rover.travelLog.push('je troune');
        } else if (string[i] === 'f'){
            moveForward(rover)
            rover.travelLog.push('javance');
            
        }
    }   
}
pilotRover('lr');
console.log(rover);