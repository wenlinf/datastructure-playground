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
}

