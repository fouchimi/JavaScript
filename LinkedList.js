function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  let node = {
    value : val,
    next : null
  };
  if(!this.head) {
    this.head = node;
  }else {
    current = this.head;
    while (current.next) {
      current = this.head;
      current = current.next;
    }
    current.next = node;
  }
}

LinkedList.prototype.print = function() {
  let current = this.head;
  while (current) {
    console.log(current.value + " ");
    current = current.next;
  }
}

let myList = new LinkedList();
myList.push(2);
myList.push(8);
myList.push(19);

myList.print();
