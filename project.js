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
 };

function turnRight(rover){
    if (rover.direction === 'N'){
        rover.direction = {direction : 'E'}
        return rover
    } 
    if (rover.direction === 'E'){
        rover.direction = {direction : 'S'}
        return rover
    }
    if (rover.direction === 'S'){
        rover.direction = {direction : 'W'}
        return rover
    }
    if (rover.direction === 'W'){
        rover.direction = {direction : 'N'}
        return rover
    }  
}

function turnLeft(rover){
    if (rover.direction === 'N'){
        rover.direction = {direction : 'W'}
        return rover
    } 
    if (rover.direction === 'E'){
        rover.direction = {direction : 'N'}
        return rover
    }
    if (rover.direction === 'S'){
        rover.direction = {direction : 'E'}
        return rover
    }
    if (rover.direction === 'W'){
        rover.direction = {direction : 'S'}
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

// console.log(turnRight(rover))
// console.log(turnLeft(rover))
console.log(moveForward(rover))