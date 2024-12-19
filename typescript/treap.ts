class Node<T> {
  value: T;
  priority: number;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

class Treap<T> {
  root: Node<T> | null;
  
  constructor() {
    this.root = null;
  }

  private rotateLeft(node: Node<T>): Node<T> {
    const rightChild = node.right;
    node.right = rightChild?.left;
    if(rightChild?.left) {
      rightChild.left.parent = node;
    }
    rightChild.parent = node.parent;
    if(!node.parent) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    rightChild.left = node;
    node.parent = rightChild;
    return rightChild;
  }

  private rotateRight(node: Node<T>): Node<T> {
    const leftChild = node.left;
    node.left = leftChild?.right;
    if(leftChild?.right) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if(!node.parent) {
      this.root = leftChild;
    } else if(node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
    return leftChild;
  }

  insert(value: T, priority: number): void {
    const newNode = new Node(value, priority);
    if(!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    let parent: Node<T> | null = null;

    while(current) {
      parent = current;
      if(value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if(value < parent!.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
    newNode.parent = parent;
    while(newNode.parent && newNode.priority < newNode.parent.priority) {
      if(newNode === newNode.parent.left) {
        this.rotateRight(newNode.parent);
      } else {
        this.rotateLeft(newNode.parent);
      }
    }
  }
}
