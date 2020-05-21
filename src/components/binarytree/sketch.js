var tree;

function setup() {
    noCanvas();
    // createCanvas(600,400);
    // background(51);
    tree = new Tree();
    
    tree.addValue(5);
    tree.addValue(3);
    tree.addValue(9);
    // tree.addValue(4);
    // tree.addValue(8);
    // tree.addValue(7);
    // tree.addValue(10);
    console.log(tree);
    tree.traverse();

    var result = tree.search(5);
    var result = tree.search(3);
    var result = tree.search(4);
    var result = tree.search(7);
    var result = tree.search(9);

    tree.sorted()

    var tree = new Tree();
    this.root.sorted(tree);
    tree.traverse()
    // tree.addValue(6)
    // tree.traverse()
    tree.remove(3)
    tree.traverse()    


}