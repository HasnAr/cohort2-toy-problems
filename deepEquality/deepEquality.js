/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//time complixity O(n)

  var deepEquals = function(obj1, obj2){
    //iterate over the object1
    for(var key in obj1){
      //check if values in the same key is equals if not return false
      if(obj1[key] !== obj2[key] && typeof obj1[key] !== 'Array')
        return false;
      //check if values in the same key is another object call the function again
      else if(typeof obj1[key] === 'Array')
        return deepEquals(obj1[key], obj2[key]);
      else if(obj1[key] === obj2[key])
        return deepEquals(obj1[key], obj2[key]);
      else
        return true;
    }
  }