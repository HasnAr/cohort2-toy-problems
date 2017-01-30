/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  this.head=null;
  this.tail= null;
};

//write methods here!


LinkedList.prototype.addToTail = function(nodeValue){
	var temp = Node(nodeValue);
	if(this.head === null){
		this.head = temp;
		this.tail = temp;
	} else{
		this.tail.next = temp;
		this.tail = temp
	}
};



LinkedList.prototype.contains =function(valueCheck){
	var temp = this.head;
	if(this.temp.value === valueCheck)
		return true;
	else if(this.temp.value !== valueCheck)
		return LinkedList.prototype.contains.call(this.temp.next, valueCheck);
	return false;
};


LinkedList.prototype.removeHead = function(){
	this.head = this.head.next;
};





function Node(value){
	return {
		value : value,
		next : null
	}
}