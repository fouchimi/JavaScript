function MinPriorityQueue() {
  this.pq = [];
  this.N = 0;
  this.pq.push(Infinity);
}

MinPriorityQueue.prototype.isEmpty = function() {
  return this.N === 0;
}

MinPriorityQueue.prototype.size = function() {
  return this.N;
}

MinPriorityQueue.prototype.insert = function(key) {
  this.pq.push(key);
  ++this.N;
  this.swim(this.N);
}

MinPriorityQueue.prototype.greater = function(p, q) {
  return this.pq[p] > this.pq[q];
}

MinPriorityQueue.prototype.exch = function(p, q) {
  let temp = this.pq[q];
  this.pq[q] = this.pq[p];
  this.pq[p] = temp;
}

MinPriorityQueue.prototype.swim = function(k) {
  while(k > 1 && this.greater(Math.floor(k/2), k)) {
    this.exch(Math.floor(k/2), k);
    k = Math.floor(k/2);
  }
}

MinPriorityQueue.prototype.sink = function(k) {
  while(2*k <= this.N) {
    let j = 2*k;
    if(j < this.N && this.greater(j, j+1)) j++;
    if(!this.greater(k, j)) break;
    this.exch(k, j);
    k = j;
  }
}

MinPriorityQueue.prototype.delMin = function() {
  let min = this.pq[1];
  this.exch(1, this.N--);
  this.pq.pop();
  this.sink(1);
  return min;
}

MinPriorityQueue.prototype.print = function() {
  console.log(this.pq);
}

let minPriorityQueue = new MinPriorityQueue();
minPriorityQueue.insert(100);
minPriorityQueue.insert(19);
minPriorityQueue.insert(36);
minPriorityQueue.insert(17);
minPriorityQueue.insert(3);
minPriorityQueue.insert(25);
minPriorityQueue.insert(1);
minPriorityQueue.insert(2);
minPriorityQueue.insert(7);
minPriorityQueue.print();
minPriorityQueue.delMin();
minPriorityQueue.print();
minPriorityQueue.delMin();
minPriorityQueue.print();
console.log(minPriorityQueue.size());
