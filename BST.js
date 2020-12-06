class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root===null){
            this.root = newNode;
            return this;
        }else{
            var nodeToCompare = this.root;
            while(true){
                if(val===nodeToCompare.val) return undefined;
                if(val>nodeToCompare.val){
                    if(nodeToCompare.right ===null){
                        nodeToCompare.right = newNode;
                        return this;
                    }else{
                        nodeToCompare = nodeToCompare.right;
                    }
                }else if(val<nodeToCompare.val){
                    if(nodeToCompare.left === null){
                        nodeToCompare.left = newNode;
                        return this;
                    }else{
                        nodeToCompare = nodeToCompare.left;
                    }
                }
            }
            
        }
    }
    find(val){
        if(!this.root) return false;
        var nodeToCompare = this.root;
        while(true){
            if(val === nodeToCompare.val) return true;
            if(val>nodeToCompare.val){
                if(nodeToCompare.right ===null) return false;
                else nodeToCompare = nodeToCompare.right;
            } else if(val<nodeToCompare.val){
                if(nodeToCompare.left===null) return false;
                else nodeToCompare = nodeToCompare.left;
            }
        }
    }
    bfs(){
        var queue = [];
        var dequeue = [];
        var node = this.root;
        queue.push(node);
        while(queue.length!==0){
            node = queue.shift();
            dequeue.push(node);
            if(node.left!==null) queue.push(node.left);
            if(node.right!==null) queue.push(node.right);
        }
        return dequeue;
    }
    dfsPreOrder(){
        var result = [];
        function traverse(node){
            result.push(node.val);
            if(node.left)  traverse(node.left); //这个地方为啥我不能return traverse（）
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    dfsPostOrder(){
        var result = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.val);
        }
        traverse(this.root);
        return result;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


