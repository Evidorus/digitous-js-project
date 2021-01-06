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
    x : 0,
    y : 0,
 };

function turnRight([direction]){
    if (direction === 'N'){
        return direction = {direction : 'E'}
    } 
    if (direction === 'E'){
        return direction = {direction : 'S'}
    }
    if (direction === 'S'){
        return direction = {direction : 'W'}
    }
    if (direction === 'W'){
        return direction = {direction : 'N'}
    }  
}

function turnLeft([direction]){
    if (direction === 'N'){
        return direction = {direction : 'W'}
    } 
    if (direction === 'E'){
        return direction = {direction : 'N'}
    }
    if (direction === 'S'){
        return direction = {direction : 'E'}
    }
    if (direction === 'W'){
        return direction = {direction : 'S'}
    }  
}



console.log(turnRight(rover.direction))
console.log(turnLeft(rover.direction))
