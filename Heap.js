class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        var index = this.values.length-1;
        while(index > 0 &&this.values[index]>this.values[Math.floor((index-1)/2)]){
            var temp = this.values[Math.floor((index-1)/2)];
            this.values[Math.floor((index-1)/2)] = this.values[index];
            this.values[index] = temp;
            index = Math.floor((index-1)/2);
        }
    }
    extractMax(){
        var max = this.values[0];
        var end = this.values.pop();
        if(this.values.length>0){
            var index = 0;
            this.values[index] = end;
            while(true){
                var leftChildIndex = index*2+1;
                var rightChildIndex = index*2+2;
                var leftChild = this.values[leftChildIndex];
                var rightChild = this.values[rightChildIndex];
                var swap = null;
                if(end<leftChild){
                    swap = leftChildIndex;
                }
                if(
                    (swap!=null &&rightChild>leftChild)
                    ||(swap==null && end < rightChild)
                    ){
                        swap = rightChildIndex;
                    }
                if(swap === null) break;
                this.values[index] = this.values[swap];
                this.values[swap] = end;
                index = swap;
            }
        }
        return max;
    }
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
