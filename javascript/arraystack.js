class ArrayStack {
  constructor() {
    this.stack = [];
  }
  // method to add element to stack
  push(element) {
    this.stack.push(element);
  }
  // method to remove and return top element of stack 
  pop() {
    if(this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.stack.pop();
  }
  // method to return top element of stack without removing it
  peek() {
    if(this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }
  // method to check if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // method to get size of stack 
  size() {
    return this.stack.length;
  }

  // method to clear stack
  clear() {
    this.stack = [];
  }
}

// example usage
const stack = new ArrayStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("top element:", stack.peek());
console.log("stack size:", stack.size());
console.log("popped element:", stack.peek());
console.log("stack size:", stack.size());

console.log("popped element:", stack.pop());
console.log("stack size after pop:", stack.size());
