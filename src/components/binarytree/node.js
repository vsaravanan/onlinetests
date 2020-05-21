

export function Node(val) {
  // , x, y) {

    this.previous = null;
    this.left = null;
    this.value = val;
    this.right = null;
    // this.x = x;
    // this.y = y;
}

Node.prototype.search = function(val) {
  if (this.value === val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  } else {
    return null;
  }
}



// Node.prototype.visit = function(parent) {
//   if (this.left != null) {
//     this.left.visit(this);
//   }
//     console.log(this.value)
//     fill(255)
//     noStroke();
//     textAlign(CENTER)
//     text(this.value, this.x, this.y)
//     stroke(255)
//     noFill()
//     ellipse(this.x, this.y, 20, 20)
//     line(parent.x, parent.y, this.x, this.y)
//   if (this.right != null) {
//     this.right.visit(this);
//   }

// }



Node.prototype.visit = function(n) {
  if (this.left != null) {
    this.left.visit(n+1);
  }
    console.log("     ".repeat(n) +  "   " + this.value)
  if (this.right != null) {
    this.right.visit(n+1);
  }

}

Node.prototype.tostring = function(leftval, rightval) {
  if (this.left != null) {
    leftval = this.left.tostring(leftval,"") + leftval
    // console.log(" left " + leftval)
  }
  if (this.right != null) {
    rightval = this.right.tostring("", rightval) + rightval
    // console.log(" right " + rightval)
  }
  // console.log("finally " + leftval + this.value + rightval)
  return leftval + this.value + rightval

}


Node.prototype.sorted = function(n) {
  if (this.left != null) {
    this.left.sorted(n);
  }
  n.addValue(this.value)
  if (this.right != null) {
    this.right.sorted(n);
  }

}

Node.prototype.addNode = function(n) {
  // debugger;
  if (n.value < this.value) {
    if (this.left == null) {
      n.previous = this;
      this.left = n;
      // this.left.x = this.x - 50;
      // this.left.y = this.y + 20;
    }
    else {
      this.left.addNode(n);
    }
  }
  else if (n.value > this.value) {
    if (this.right == null) {
      n.previous = this;
      this.right = n;
      // this.right.x = this.x + 50;
      // this.right.y = this.y + 20;
    }
    else {
      this.right.addNode(n);
    }
  }

}

Node.prototype.remove = function() {

  var root = this.previous
  if (root != null) {
    if (root.right === this) {
      root.right = null
    }
    else if (root.left === this) {
      root.left = null
    }
  }
  else {
    if (this.right != null ) {
      root = this.right;
    } else if (this.left != null ) {
      root = this.left;
    }
  }

  const me = Object.assign({}, this);

  this.left = null
  this.right = null

  if (me.right != null ) {
    root.addNode(me.right);
  } 
  if (me.left != null ) {
    root.addNode(me.left);
  } 

}
  