/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/


// k in case every was invoked 
// n array length
// o(nk)
function ticTacToe(board){
	
	// check for minor or major win for x & o
	if(board[0][0] ===1 && board[1][1] ===1 board[2][2] ===1 || board[0][2] ===1 && board[1][1] ===1 && board[2][0] ===1){
		return 1;}
	 if(board[0][0] ===2 && board[1][1] ===2 board[2][2] ===2 || board[0][2] ===2 && board[1][1] ===2 && board[2][0] ===2)	{
		return 1;}
	//itereate over the array of arrays to check for winner on rows prespective or col prespective
	for(var i=0;i< board.length; i++){
			// check if the whole row has all 1's
			if(_.every(board[i], elem => elem === 1)){
				return 1;
			}
			// check if the whole row has all 2's
			else if(_.every(board[i], elem => elem === 2)){
				return 1;
			}
			// check if the whole col has all 1's
			else if(board[0][i] === 1 && board[1][i]=== 1 && board[2][i]=== 1){
				return 1;
			}
			// check if the whole row has all 2's	
			else if(board[0][i] === 2 && board[1][i]=== 2 && board[2][i]=== 2){
				return 1;	
			}
	}
	// else return -1
	return -1;
};




