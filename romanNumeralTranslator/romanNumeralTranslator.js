
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};

	//in case they small numeral appers before large one
	if(romanNumeral.match(/[IVXLCDM]/g)){
		//perform subtract operation
	  return romanNumeral.split("").reduce(function(a, b){
	 	return   DIGIT_VALUES[b]-a;
  	  },0)
	}
	
	//normal cases where large numeral appears before small one
	return romanNumeral.split("").reduce(function(a, b){
      return  a+ DIGIT_VALUES[b];
	},0)
}