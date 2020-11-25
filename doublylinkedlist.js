class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            // var prevNode = poppedNode.prev;
            // poppedNode.prev = null;
            // prevNode.next = null;
            // this.tail = prevNode;
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev=newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0||index>=this.length) return false;
        var counter;
        var currentNode;
        if(index<this.length/2){
            counter = 0;
            currentNode = this.head;
            while(counter!==index){
                currentNode = currentNode.next;
                counter++;
            }
        }else{
            counter = this.length-1;
            currentNode = this.tail;
            while(counter!==index){
                currentNodeNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }
    set(index, val){
        var oldNode = this.get(index);
        if(oldNode){
            oldNode.val = val;
            return true;
        }else{
            return false;
        }
    }
    insert(index, val){
        if(index<0||index>this.length) return false;
        if(index===0) return !!this.unshift(val);
        if(index===this.length) return !!this.push(val);
        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        var newNode = new Node(val);
        prevNode.next = newNode;
        newNode.prev=prevNode;
        newNode.next=nextNode;
        nextNode.prev=newNode;
        this.length++;
        return true;
    }
}