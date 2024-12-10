class Node {
  constructor(key, priority) {
    this.key = key;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

class Treap {
  constructor() {
    this.root = null;
  }
  // right rotation
  rotateRight(y) {
    const x = y.left;
    y.left = x.right;
    x.right = y;
    return x;
  }

  // left rotation
  rotateLeft(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  // insert new key with given priority 
  insert(root, key, priority) {
    if(!root) {
      return new Node(key, priority);
    }
    if(key < root.key) {
      root.left = this.insert(root.left, key, priority);
      if(root.left.priority > root.priority) {
        root = this.rotateRight(root);
      } else {
        root.right = this.insert(root.right, key, priority);
        if(root.right.priority > root.priority) {
          root = this.rotateLeft(root);
        }
      }
      return root;
    }}
    // public method to insert a new key
    insertKey(key, priority) {
      this.root = this.insert(this.root, key, priority);
    }
    // in order traversal
    inOrder(root) {
      if(root) {
        this.inOrder(root.left);
        console.log('Key: ${root.key}, Priority: ${root.priority}');
        this.inOrder(root.right);
      }
    }
    // public method to perform in order traversal
    printInOrder() {
      this.inOrder(this.root);
    }
}

// example usage
const treap = new Treap();
treap.insertKey(50, 30);
treap.insertKey(20, 40);
treap.insertKey(70, 20);
treap.insertKey(10, 50);
treap.insertKey(30, 25);

console.log("inorder traversal of the treap:");
treap.printInOrder();
