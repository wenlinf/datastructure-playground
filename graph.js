class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1,vertex2){
        var index= this.adjacencyList[vertex1].indexOf(vertex2);
        this.adjacencyList[vertex1].splice(index,1);
        index = this.adjacencyList[vertex2].indexOf(vertex1);
        this.adjacencyList[vertex2].splice(index,1);
    }
    removeVertex(vertex){
        var edges = this.adjacencyList[vertex];
        for(var i =0;i<edges.length;i++){
            this.removeEdge(vertex,edges[i]);
        }
        delete this.adjacencyList[vertex];
    }
    DFSrecursive(vertex){
        var visited = {};
        var result = [];
        var adjacencyList = this.adjacencyList;
        function recursiveHelper(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            for(var i =0;i<adjacencyList[vertex].length;i++){
                if(!visited[adjacencyList[vertex][i]]){
                    recursiveHelper(adjacencyList[vertex][i]); 
                }
            }
        }
        recursiveHelper(vertex);
        return result;
    }
    DFSiterative(start){
        var stack = [start];
        var visited = {};
        var result = [];
        var currentVertex;
        //while(stack.length!==0){
        while(stack.length){
            currentVertex = stack.pop();
            visited[currentVertex] = true;
            result.push(currentVertex);
            var neighbours = this.adjacencyList[currentVertex];
            for(var i = 0;i<neighbours.length;i++){
                if(!visited[neighbours[i]]){
                    visited[neighbours[i]] = true;
                    stack.push(neighbours[i]);
                }
            }
        }
        return result;
    }
    bfsiterative(start){
        var stack = [start];
        var visited = {};
        var result = [];
        var currentVertex;
        //while(stack.length!==0){
        while(stack.length){
            currentVertex = stack.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);
            var neighbours = this.adjacencyList[currentVertex];
            for(var i = 0;i<neighbours.length;i++){
                if(!visited[neighbours[i]]){
                    visited[neighbours[i]] = true;
                    stack.push(neighbours[i]);
                }
            }
        }
        return result;
    }
    bfs(start){
        var queue = [start];
        var visited = {};
        var result = [];
        var currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);
            // var neighbours = this.adjacencyList[currentVertex];
            // for(var i = 0;i<neighbours.length;i++){
            //     if(!visited[neighbours[i]]){
            //         visited[neighbours[i]] = true;
            //         queue.push(neighbours[i]);
            //     }
            // }
            if(this.adjacencyList[currentVertex].length!==0){
                this.adjacencyList[currentVertex].forEach(neighbour => {
                     if(!visited[neighbour]){
                         visited[neighbour] = true;
                         queue.push(neighbour);
                     }
                 })
             }
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.DFSrecursive("A")
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F