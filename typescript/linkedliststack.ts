class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack<T> {
  private top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  push(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const poppedValue = this.top!.value;
    this.top = this.top!.next;
    return poppedValue;
  }

  peek(): T | undefined {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.top!.value;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}
