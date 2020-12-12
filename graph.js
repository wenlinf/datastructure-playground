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
    
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");

