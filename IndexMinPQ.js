function IndexMinPQ(max) {
  this.pq = [];
  this.qp = [];
  this.keys = [];
  this.N = 0;
  this.pq.push(Infinity);
  this.keys.push(Infinity);
  for(let i = 0; i < max; i++) this.qp.push(-1);
}

IndexMinPQ.prototype.isEmpty = function() {
  return this.N === 0;
}

IndexMinPQ.prototype.size = function() {
  return this.N;
}

IndexMinPQ.prototype.contains = function(i) {
  return this.qp[i] !== undefined;
}

IndexMinPQ.prototype.insert = function(i, key) {
  ++this.N;
  this.qp.splice(i, 0, this.N);
  this.pq.push(i);
  this.keys.splice(i, 0, key);
  this.swim(this.N);
}

IndexMinPQ.prototype.greater = function(p, q) {
  return this.pq[p] > this.pq[q];
}

IndexMinPQ.prototype.exch = function(p, q) {
  let temp = this.pq[q];
  this.pq[q] = this.pq[p];
  this.pq[p] = temp;
}

IndexMinPQ.prototype.swim = function(k) {
  while(k > 1 && this.greater(Math.floor(k/2), k)) {
    this.exch(Math.floor(k/2), k);
    k = Math.floor(k/2);
  }
}

IndexMinPQ.prototype.sink = function(k) {
  while(2*k <= this.N) {
    let j = 2*k;
    if(j < this.N && this.greater(j, j+1)) j++;
    if(!this.greater(k, j)) break;
    this.exch(k, j);
    k = j;
  }
}

IndexMinPQ.prototype.delMin = function() {
  let min = this.pq[1];
  this.exch(1, this.N--);
  this.sink(1);
  this.qp[min] = -1;
  this.keys[min] = null;
  this.pq[this.N+1] = -1;
  return min;
}

IndexMinPQ.prototype.print = function() {
  console.log(this.pq);
}

let indexMinPQ = new IndexMinPQ();
indexMinPQ.insert(100);
indexMinPQ.insert(19);
indexMinPQ.insert(36);
indexMinPQ.insert(17);
indexMinPQ.insert(3);
indexMinPQ.insert(25);
indexMinPQ.insert(1);
indexMinPQ.insert(2);
indexMinPQ.insert(7);
indexMinPQ.insert(8);
indexMinPQ.print();
indexMinPQ.delMin();
indexMinPQ.print();
indexMinPQ.delMin();
indexMinPQ.print();
console.log(indexMinPQ.size());
