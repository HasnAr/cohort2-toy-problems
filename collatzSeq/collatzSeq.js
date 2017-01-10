/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

//iterate over 
var longestCollatzSeq = function(){
	dictionary=[];
	var n = 999999;
	while(n>0){
		dictionary.push(recur(n))
		n--;
	}
	return dictionary.max();
}

//calculating sequence for positive integer
function recur(startingPoint, counter=1){

	if(startingPoint >1){
		if(startingPoint%2 === 0){
			//calling the function recursivly to startingPoint/2
			counter++
			return recur(startingPoint/2, counter);
			
		}
		//other way check if startingPoint is odd 
		 else{
			//calling the function recursivly to 3*startingPoint+1
			counter++
			return recur(3*startingPoint+1, counter)
			

			}
		} else{
			return counter;
		}
}