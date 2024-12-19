class Stack<T> {
  private items: T[];
  private top: number;

  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(item: T): void {
    this.items[++this.top] = item;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.top--];
  }

  peek(): T | undefined {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.top];
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  size(): number {
    return this.top + 1;
  }
}

// example usage
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty()); 
