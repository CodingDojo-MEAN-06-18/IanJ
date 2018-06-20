function BST(){
    this.root = null;
    
    BST.prototype.insert = function(val){
        var node = new Node(val);
        if (!this.root){
            this.root = node;                        
        } else {
            this.root.insert(node);
        }
        return this;
    }
}
function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
    Node.prototype.insert = function(node){
        if (node instanceof Node){
            if(node.val > this.val){
                if(!this.right){
                    this.right = node;
                } 
                else {
                    this.right.insert(node);
                }
            } else if (node.val < this.val){
                if(!this.left){ 
                    this.left = node;
                } 
                else {
                    this.left.insert(node);
                }
            }
        }
    }
}
BST.prototype.preOrder = function(node){
    if(!node){
        node = this.root;
    }
    if(node.left){
        this.preOrder(node.left);
    }
    if(node.right){
        this.preOrder(node.right);
    }
}
BST.prototype.postOrder = function(node){
    if (!node){
        node = this.root;
    }
    if(node.left){
        this.postOrder(node.left);
    }
    if(node.right){
        this.postOrder(node.right);
    }
}
BST.prototype.inOrder = function(node){
    if(!node){
        node = this.root;
    }
    if(node.left){
        this.inOrder(node.left);
    }
    if(node.right){
        this.inOrder(node.right);   
    }
}
BST.prototype.depth = function(node){
    if(!node){
            return 0;
    } else {
        var left = this.depth(node.left);
        var right = this.depth(node.right);
        return (left > right ? left : right) + 1;
    }
}

var BST_data = new BST().insert(20).insert(32).insert(12).insert(44);
BST_data.preOrder();
BST_data.postOrder();
BST_data.inOrder();
console.log(BST_data);
console.log(BST_data.depth());