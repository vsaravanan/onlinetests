import { Node } from 'components/binarytree/node'

export function Tree() {
    this.root = null;
}


Tree.prototype.traverse = function(val) {
    this.root.visit(1)
    // console.log(this.tostring())
    // console.log(this)
}

Tree.prototype.sorted = function(val) {
    var tree = new Tree();
    this.root.sorted(tree);
    tree.traverse()
    return tree

}

Tree.prototype.tostring = function() {
    return this.root.tostring("","")
}


Tree.prototype.addValue = function(val) {

    var n = new Node(val);
    if (this.root == null) {
        this.root = n;   
        // this.root.x = width / 2;
        // this.root.y = 16;
    }
    else {
    this.root.addNode(n);
    }
}

Tree.prototype.remove = function(val) {
    var n = this.search(val)
    if (n != null) {
        if (this.root === n) {

            if (this.root.right != null) {
                this.root = this.root.right;
            } else if (this.root.left != null) {
                this.root = this.root.left;
            }

        }
        n.remove();

    }

}

Tree.prototype.search = function (val) {
    var found = this.root.search(val);
    if (found == null) {
        console.log(val + ' not found');
    } else {
        console.log(val + ' found');
    }
    return found;
}



