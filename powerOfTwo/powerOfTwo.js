/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/
//O(n^n)
//my soluation
var powerOfTwo = function(num){
	if(num<=69){
		var temp = Math.pow(2,num).toString().split("");
		return temp.reduce(function(a,b){
			return Number(a)+ Number(b);
		},0);
	}
	else
		return powerOfTwo(num-69) +Math.pow(2,69).toString().split('').reduce(function(a,b){
			return Number(a) + Number(b);
		},0) ;  
}


//not main
//O(log n)
var powerOfTwo = function(num){
	var temp =Math.pow(2, num), result=0;

	while(temp>0){
		result += Number(temp%10);
		temp /= 10;
	}

	return result;
}