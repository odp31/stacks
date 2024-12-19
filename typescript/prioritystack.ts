class PriorityQueue<T> {
  private heap: T[];

  constructor() {
    this.heap = [];
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private heapifyUp(index: number): void {
    while(index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
      [this.heap[index], this.heap[this.parent(index)]] = [this.heap[this.parent(index)], this.heap[index]];
      index = this.parent(index);
    }
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if(left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if(right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if(smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }

  enqueue(item: T): void {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
