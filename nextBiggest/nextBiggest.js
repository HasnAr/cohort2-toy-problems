/*

**** PICK ONE OF THE TWO PROBLEMS ****

Problem 1 (Medium):
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Examples:

Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 
rotate(data, 5) // => [1, 2, 3, 4, 5] 
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

*/
//O(1);
function rotate(array, steps){
	//stoping condition
	if(steps ===0 )
		return array;
	else{
		//else keep calling rotate
		if(steps>0){
			//if steps is positive shift to the right
		array = Array.from(array);
		array.unshift(array.pop());
		//call rotate again
		return rotate(array, --steps);
	} else if(steps<0){
		//if steps is positive shift to the left
		array = Array.from(array);
		array.push(array.shift());
		//call rotate again
		return rotate(array, ++steps);
	}

	}
}

/*
Problem 2 (Advanced)
You have to create a function that takes a positive integer number and returns the 
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

//O(1)
function nextBigger(num){
	var temp= num.toString().split("");
	if(Number(temp[temp.length-2])< Number(temp[temp.length-1])){
		var holder= temp[temp.length-2];
		temp[temp.length-2] = temp[temp.length-1]
		temp[temp.length-1] = holder;
		} else
		return -1
	return Number(temp.join(''));
}