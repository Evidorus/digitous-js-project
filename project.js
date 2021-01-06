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
    direction : 'S',
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
}

function pilotRover(string){
    for (var i = 0; i < string.length; i++){
        if (string === 'l'){
            console.log(turnLeft(rover));
        }
        if (string === 'r'){
            console.log(turnRight(rover));
        }
        if (string === 'f'){
            console.log(moveForward(rover));
        }
    }
    // switch(string){
    //     case 'l':
    //         return console.log(turnLeft(rover));
    //         break;
    //     case 'r':
    //         return console.log(turnRight(rover));
    //         break;
    //     case 'f':
    //         return console.log(moveForward(rover));
    //         break        
    // }
}

// console.log(turnRight(rover))
// console.log(turnLeft(rover))
console.log(pilotRover('f'));