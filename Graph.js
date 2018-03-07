function Graph(V) {
  this.V = V;
  this.E = 0;
  this.adj = [];
  for(let v = 0; v < this.V; v++) {
    this.adj.push(new Map());
  }
}

Graph.prototype.addEdge = function(v, w) {
  if(!this.adj[v].has(v)) {
    this.adj[v].set(v, [w]);
  }else {
    list = this.adj[v].get(v);
    if(!list.includes(w)) {
      list.push(w);
      this.adj[v].set(v, list);
    }
  }
  this.E++;
}

Graph.prototype.edges = function() {
  return this.E;
}

Graph.prototype.vertices = function() {
  return this.V;
}

Graph.prototype.adjacents = function(v) {
  return this.adj[v].get(v);
}

Graph.prototype.printGraph = function() {
  for(let v = 0; v < this.V; v++) {
    let currentEdge = this.adj[v];
    console.log(currentEdge);
  }
}

let myGraph = new Graph(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 5);
myGraph.addEdge(0, 2);
myGraph.addEdge(2, 1);
myGraph.addEdge(2, 3);
myGraph.addEdge(3, 5);
myGraph.addEdge(3, 4);
myGraph.addEdge(2, 4);
myGraph.printGraph();
myGraph.edges();
console.log(myGraph.edges());
console.log(myGraph.adjacents(3));

function DepthFirstPaths(G, s) {
  this.marked = [];
  this.edgeTo = [];
  this.s = s;
  for(let v = 0; v < G.vertices(); v++) {
    this.marked.push(false);
    this.edgeTo.push(-1);
  }
}

DepthFirstPaths.prototype.dfs = function dfs(G, v) {
  this.marked[v] = true;
  var self = this;
  edges = G.adjacents(v);
  //console.log(self);
  if(edges !== undefined) {
    edges.forEach((x) => {
      if(!this.marked[x]) {
        this.edgeTo[x] = v;
        console.log(this.edgeTo[x]);
        self.dfs(G, x);
      }
    });
  }
}

DepthFirstPaths.prototype.hasPathTo = function(v) {
  return this.marked[v];
}

DepthFirstPaths.prototype.pathTo = function(v) {
  if(!this.hasPathTo(v)) return null;
  let path = [];
  for(let x = v; x != this.s; x = this.edgeTo[x]) {
    path.push(x);
  }
  path.push(this.s);
  return path;
}

let depthFirstpaths = new DepthFirstPaths(myGraph, 0);
depthFirstpaths.dfs(myGraph, 0);
console.log(depthFirstpaths.pathTo(4).reverse());
