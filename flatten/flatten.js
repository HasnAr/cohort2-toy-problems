/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/
function flatten(){
	//O(n)
	//semi colon as regular expression
	var x= /\,/gi
	// for(var key in arguments)
	// 	if(arguments[key] === null)
	// 		arguments[key] = 'true&false'
	// console.log(Array.from(arguments));
	//transfer arguments object into array join and replace all semi-colon and split it again into array
	return Array.from(arguments).join("").replace(x,'').split("");
	
	//altrentaive solution using stringify
	// var leftBrac= /\[/gi, rightBrac= /\]/gi, qoat= /\"/gi, semi = /\,/gi;
	// return JSON.stringify(Array.from(arguments)).replace(leftBrac,'').replace(rightBrac, '').replace(qoat,'').replace(semi,'');
}