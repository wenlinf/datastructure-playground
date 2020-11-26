public class Node{
    E value;
    Node next;
    Node prev;
    Node(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
public class DoublyLinkedList{
    Node head;
    Node tail;
    int length;
    DoublyLinkedList(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        Node newNode = new Node(value);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

public static void main(string[] args){
    DoublyLinkedList list = new DoublyLinkedList();
    list.push("hello");
    System.out.println(list);
}