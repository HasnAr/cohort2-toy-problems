/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/
<<<<<<< HEAD
//o(n^2)
var dirReduc = function(directions){
	// create RegExp for each case
	var southNorth= /SOUTHNORTH/g;
	var northSouth= /NORTHSOUTH/g;
	var eastWest=/EASTWEST/g;
	var westEast= /WESTEAST/g;

	
	var temp = directions.join('');
	while(temp.match(southNorth) || temp.match(northSouth) || temp.match(eastWest) || temp.match(westEast)){
	temp = temp.replace(southNorth, '');
	temp = temp.replace(northSouth, '');
	temp = temp.replace(eastWest, '');
	temp = temp.replace(westEast, '');
}
	return temp;
=======

var dirReduc = function(directions){
	
	return directions;
>>>>>>> d2130e14cb0ab2ec81404accbb5aee359f2349a4
};

