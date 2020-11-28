public class Stack {
    public class Node<E>{
        E value;
        Node next;
        private Node (E value){
            this.value = value;
            this.next = null;
        }
    }
    Node first;
    Node last;
    int size;
    public Stack (){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    public <E> int push(E value){
        Node newNode = new Node(value);
        newNode.next = this.first;
        this.first = newNode;
        return ++this.size;
    }
    public Node pop(){
        Node temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.size--;
        return temp;
    }

    public static void main(String[] args) {
        Stack stack = new Stack();
        int first = stack.push("first");
        System.out.println("size: "+ stack.size);
        System.out.println(first);
        System.out.println(stack.first.value);
        int second = stack.push("second");
        System.out.println(stack.first.value);
        System.out.println(stack.first.next.value);
        System.out.println("size: "+ stack.size);
        Node pop = stack.pop();
        System.out.println(pop.value);
        System.out.println(pop.next);
        System.out.println(stack.first.value);
        System.out.println("size: "+ stack.size);
    }
}
