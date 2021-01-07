var prompt = require("prompt");
prompt.start();

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
        if ( rover.y === 0){
            console.log('erreur, tu sort de la zone sécurisé !!')
        }else {
            rover.y = rover.y + 1;
        }
    }
    if (rover.direction === 'E'){
        
        if (rover.x === 10 || rover.x === -1){
            console.log('erreur, tu sort de la zone sécurisé !!')
        } else{
            rover.x = rover.x + 1;
        }
    }
    if (rover.direction === 'S'){
        rover.y = rover.y - 1;
        if (rover.y === -10 || rover.y === 1){
            console.log('erreur, tu sort de la zone sécurisé !!')
        } else return rover
    }
    if (rover.direction === 'W'){
        rover.x = rover.x - 1;
        if (rover.x === 10 || rover.x === -1){
            console.log('erreur, tu sort de la zone sécurisé !!')
        } else return rover
        
    }
    // console.log(rover.travelLog)
}

function pilotRover(string){
    for (var i = 0; i < string.length; i++){
        if (string[i] === 'l'){
            rover.travelLog.push({ x: rover.x, y: rover.y, d: rover.direction })
            turnLeft(rover);
            // rover.travelLog.push('je tourne');
        } else if (string[i] === 'r'){
            rover.travelLog.push({ x: rover.x, y: rover.y, d: rover.direction })
            turnRight(rover)
            // rover.travelLog.push('je troune');
        } else if (string[i] === 'f'){
            rover.travelLog.push({ x: rover.x, y: rover.y, d: rover.direction })
            moveForward(rover)
            // rover.travelLog.push('javance');
            
        }
        
    }   
}
// pilotRover('fffffffffffffff');
// console.log(rover);

console.log(process.argv);
var result = pilotRover(process.argv[2]);
console.log(rover);