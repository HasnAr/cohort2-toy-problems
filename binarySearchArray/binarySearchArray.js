/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */



//o(logn)

var binarySearch = function (array, target) {
	//iterate over the array 
  for(var n=0;n<array.length;n++){
  	//check if first element equal target
  	if(target === array[n])
  		return n;
  	//check if last element equal target
  	else if(target === array[array.length-1])
  		return array.length-1;
  	//if target > from elemnt in the midle of the array call binarysearch for the right half of the array
  	else if(target> array[Math.ceil(array.length/2)])
  		return binarySearch(array.splice(Math.ceil(array.length/2)),target) + n;
  	//if target < from elemnt in the midle of the array call binarysearch for the left half of the array
  	else if (target<array[Math.ceil(array.length/2)])
  		return binarySearch(array.splice(0,Math.ceil(array.length/2)),target) + n;	
  }
};

