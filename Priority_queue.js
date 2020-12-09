class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        var node = new Node(val,priority);
        this.values.push(node);
        var index = this.values.length-1;
        while(index>0 && this.values[Math.floor((index-1)/2)].priority>priority){
            this.values[index] = this.values[Math.floor((index-1)/2)];
            this.values[Math.floor((index-1)/2)] = node;
            index = Math.floor((index-1)/2)
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)