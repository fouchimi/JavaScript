function DirectedEdge(v, w, weigth) {
  this.v = v;
  this.w = w;
  this.weigth = weigth;
}

DirectedEdge.prototype.from = function() {
  return this.v;
}

DirectedEdge.prototype.to = function() {
  return this.w;
}

DirectedEdge.prototype.weigth = function() {
  return this.weigth;
}

function EdgeWeightedDigraph(V) {
  this.V = V;
  this.adj = [];
  for(let v = 0; v < this.V; v++) {
    this.adj.push(new Map());
  }
}

EdgeWeightedDigraph.prototype.vertices = function() {
  return this.V;
}

EdgeWeightedDigraph.prototype.edges = function() {
  return this.E;
}

EdgeWeightedDigraph.prototype.addEdge = function(e) {
  let v = e.from();
  if(!this.adj[v].has(v)) {
    this.adj[v].set(v, [e]);
  }else {
    list = this.adj[v].get(v);
    if(!list.includes(e)) {
      list.push(e);
      this.adj[v].set(v, list);
    }
  }
  this.E++;
}

EdgeWeightedDigraph.prototype.adjacents = function(v) {
  return this.adj[v];
}

EdgeWeightedDigraph.prototype.printGraph = function() {
  for(let v = 0; v < this.V; v++) {
    for([key, values] of this.adj[v]) {
      console.log("Key: " + key + " Value: " + values);
      for(let k in values) {
        console.log(values[k]);
      }
    }
  }
}

let first = new DirectedEdge(0, 1, 5.0);
let second = new DirectedEdge(0, 4, 9.0);
let third = new DirectedEdge(0, 7, 8.0);
let fourth = new DirectedEdge(1, 2, 12.0);
let fifth = new DirectedEdge(1, 3, 15.0);
let sixth = new DirectedEdge(1, 7, 4.0);
let seventh = new DirectedEdge(2, 3, 3.0);
let eigth = new DirectedEdge(2, 6, 11.0);
let nineth = new DirectedEdge(3, 6, 9.0);
let tenth = new DirectedEdge(4, 5, 4.0);
let eleventh = new DirectedEdge(4, 6, 20.0);
let twelveth = new DirectedEdge(4, 7, 5.0);
let thirteen = new DirectedEdge(5, 2, 1.0);
let fourtheen = new DirectedEdge(5, 6, 13.0);
let fiftheen = new DirectedEdge(7, 5, 6.0);
let sixtheen = new DirectedEdge(7, 2, 7.0);

let edgeWeightedDigraph = new EdgeWeightedDigraph(8);
edgeWeightedDigraph.addEdge(first);
edgeWeightedDigraph.addEdge(second);
edgeWeightedDigraph.addEdge(third);
edgeWeightedDigraph.addEdge(fourth);
edgeWeightedDigraph.addEdge(fifth);
edgeWeightedDigraph.addEdge(sixth);
edgeWeightedDigraph.addEdge(seventh);
edgeWeightedDigraph.addEdge(eigth);
edgeWeightedDigraph.addEdge(nineth);
edgeWeightedDigraph.addEdge(tenth);
edgeWeightedDigraph.addEdge(eleventh);
edgeWeightedDigraph.addEdge(twelveth);
edgeWeightedDigraph.addEdge(thirteen);
edgeWeightedDigraph.addEdge(fourtheen);
edgeWeightedDigraph.addEdge(fiftheen);
edgeWeightedDigraph.addEdge(sixtheen);

edgeWeightedDigraph.printGraph();

function ShortestPath(G, s) {
  this.distTo = [];
  this.edgeTo = [];
  for(let v = 0; v < G.vertices(); v++) {
    this.edgeTo.push(-1);
    this.distTo.push(Infinity);
  }
}

ShortestPath.prototype.distanceTo = function(v) {
  return this.distTo[v];
}

ShortestPath.prototype.pathTo = function(v) {
  let path = [];
  for(let e = this.edgeTo[v]; e !== undefined; e = edgeTo[e.from()]) {
    path.push(e);
  }
  return path;
}

ShortestPath.prototype.relax = function(e) {
  let v = e.from(), w = e.to();
  if(this.distTo[w] > this.distTo[v] + e.weigth()) {
    this.distTo[w] = this.distTo[v] + e.weigth();
    this.edgeTo[w] = e;
  }
}
