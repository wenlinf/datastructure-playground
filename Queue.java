public class Queue {
    private class Node<E> {
        Node(E value){
            this.value = value;
        }
        E value;
        Node next;
    }
    Node first;
    Node last;
    int size;
    Queue(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    public <E> int enqueue(E value){
        Node newNode = new Node(value);
        if (this.size==0){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    public Node dequeue(){
        if(this.size==0) return null;
        Node temp = this.first;
        if (this.size==1){
            this.last = null;
        }
        this.first = this.first.next;
        temp.next=null;
        this.size--;
        return temp;
    }

    public static void main(String[] args) {
        Queue queue = new Queue();
        queue.enqueue("first");
        System.out.println("size: "+queue.size);
        System.out.println(queue.first.value);
        queue.enqueue("second");
        System.out.println("size: "+queue.size);
        System.out.println(queue.first.next.value);
        System.out.println("last: "+queue.last.value);
        Node dequeue = queue.dequeue();
        System.out.println(dequeue.value);
        System.out.println(queue.first.value);
        System.out.println("last: "+queue.last.value);
    }

}
