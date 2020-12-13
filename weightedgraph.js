class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        // var weightedNeighbour1 = {node:vertex2, weight: weight};
        // this.adjacencyList[vertex1].push(weightedNeighbour1);
        // var weightedNeighbour2 = {node: vertex2, weight: weight};
        // this.adjacencyList[vertex2].push(weightedNeighbour2);
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
}