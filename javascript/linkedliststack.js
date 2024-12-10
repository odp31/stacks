class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  // method to add element to stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // method to remove and return top element of stack
  pop() {
    if(this.isEmpty()) {
      throw new Error("stack is empty");
    }
    const poppedNode = this.head;
    this.head = this.head.next;
    return poppedNode.data;
  }

  // method to return top element of stack without removing it
  peek() {
    if(this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.head.data;
  }
  // method to check if stack is empty
  isEmpty() {
    return this.head === null;
  }
  // method to get size of stack
  size() {
    let count = 0;
    let current = this.head;
    while(current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // method to clear stack
  clear() {
    this.head = null;
  }
}
// example usage
const stack = new LinkedListStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("top element: ", stack.peek());
console.log("stack size: ", stack.size());
console.log("popped element:", stack.pop());
console.log("stack size after pop: ", stack.size());
