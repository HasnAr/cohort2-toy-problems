/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	// var  x= Math.max(array);
	// var y = Math.max(array.slice(array.indexof(x,1)));
	// var temp = array.slice(array.indexOf(x),1);
	// temp = temp.slice(temp.indexOf(y),1);
	// var z= Math.max(temp);
	// return x*y*z;


	//altrenative solution
	array.sort(function(a, b) {
  return a - b;
	});
	return array[array.length-1]*array[array.length-2]*array[array.length-3]
};




