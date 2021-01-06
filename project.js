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
    x : 0,
    y : 0,
 };
function turnLeft (rover){}
function turnRight (rover){
    changement = { direction : 'E' };
    return changement
}
console.log(rover)
console.log(turnLeft(rover))

function moveForward(rover){
    changement = { x : 0 , y : 1}
    return changement
}

console.log(moveForward(rover));
