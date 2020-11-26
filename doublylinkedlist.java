public class DoublyLinkedList {
    private class Node<E>{
        E value;
        Node next;
        Node prev;
        Node(E value){
            this.value = value;
            this.next = null;
            this.prev = null;
        }
    }
    Node head;
    Node tail;
    int length;
    DoublyLinkedList(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    public <E> DoublyLinkedList push(E value){
        Node newNode = new Node(value);
        if(this.head==null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    public Node pop(){
        if(this.length==0) return null;
        Node removedNode;
        if(this.length==1){
            removedNode=this.head;
            this.head = null;
            this.tail= null;
        }else {
            removedNode = this.tail;
            Node prevNode = this.tail.prev;
            prevNode.next = null;
            removedNode.prev = null;
            this.tail=prevNode;
        }
        this.length--;
        return removedNode;
    }
    public Node shift(){
        if (this.length==0) return null;
        Node oldHead = this.head;
        if (this.length==1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next;
            oldHead.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    public <E> DoublyLinkedList unshift(E value){
        Node newNode = new Node(value);
        if (this.length==0){
            this.head = newNode;
            this.tail = newNode;
        }else {
            Node oldHead = this.head;
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    public Node get(int index){
        if(index<0||index>=this.length) return null;
        Node currentNode = null;
        if(index<this.length/2){
            currentNode = this.head;
            for (int i =0;i<index;i++){
                currentNode = currentNode.next;
            }
        }else {
            currentNode = this.tail;
            for (int i = this.length-1;i>index;i--){
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    }
    public <E> boolean set(int index, E value){
        Node currentNode = this.get(index);
        if (currentNode!=null){
            currentNode.value = value;
            return true;
        }else {
            return false;
        }
    }
}


