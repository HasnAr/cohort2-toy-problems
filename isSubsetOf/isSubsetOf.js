/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
<<<<<<< HEAD
 *
 * NOTE: You should disregard duplicates in the set.
 *
=======
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
<<<<<<< HEAD
	return _.filter(this, function(value, index){
		return arr.includes(value);
	}).length === this.length;
}
 var a = ['commit','push']
 a.isSubsetOf(['commit','rebase','push','blame']) // true
 var b = ['merge','reset','reset','what']
 b.isSubsetOf(['reset','merge','add','commit']) // true
=======

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
