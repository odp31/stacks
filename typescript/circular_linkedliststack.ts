class Node<T> {
  value: t;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}


class CircularLinkedListStack<T> {
  private top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  push(value: T): void {
    const newNode = new Node(value);

    if(this.isEmpty()) {
      newNode.next = newNode;
    } else {
      newNode.next = this.top.next;
      this.top.next = newNode;
    }
    this.top = newNode;
  }

  pop(): T | undefined {
    if(this.isEmpty()) {
      return undefined;
    }
    const poppedValue = this.top!.value;

    if(this.top === this.top.next) {
      this.top = null;
    } else {
      this.top = this.top.next;
    }
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
