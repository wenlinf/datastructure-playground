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
    dequeue(){
        var min = this.values[0];
        var end = this.values.pop();
        if(this.values.length>0){
            var endPriority = end.priority;
            var index = 0;
            this.values[index] = end;
            while(true){
                var leftChildIndex = index*2+1;
                var rightChildIndex = index*2+2;
                var swap = null;
                if(leftChildIndex<this.values.length){
                    var leftChild = this.values[leftChildIndex];
                    if(endPriority>leftChild.priority) swap = leftChildIndex;
                }
                if(rightChildIndex<this.values.length){
                    var rightChild = this.values[rightChildIndex];
                    if((swap!=null && rightChild.priority<leftChild.priority)||(swap === null && rightChild.priority<end.priority)) swap = rightChildIndex;
                }
                if(swap === null) break;
                this.values[index] = this.values[swap];
                this.values[swap] = end;
                index = swap;
            }
        }
        return min;
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