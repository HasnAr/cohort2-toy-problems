/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var temp=[];
	var len= matrix.length-1,i=0,j=0,x=0;
	while(i<=len){
		//j=
		while(j<=len){
			//chceck if iterator reach the right top corner
			if(j===len-x && i === x){
				temp.push(matrix[i][j]);
				i++
			}
			//chceck if iterator reach the right bottom corner
			else if(i ===len-x && j ===len-x) {
				temp.push([i][j])
				j--;
			}
			//chceck if iterator reach the left bottom corner
			else if(i === len-x && j===x){
				temp.push([i][j])
				i--;
			} 
			//chceck if iterator reach the left top corner
			else if(i===x && j===x){
				temp.push([i][j])
				j++
			} else{
				temp.push([i][j]);
				i++;
				j++;
			}	
		}
	}
	return temp;
};