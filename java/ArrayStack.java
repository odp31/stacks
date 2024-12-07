public class ArrayStack {
  private int[] stackArary;
  private int top;

  public ArrayStack(int capacity) {
    stackArray = new int[capacity];
    top = -1;
  }
  public void push(int data) {
    if (isFull()) {
      System.out.println("stack overflow");
      return;
    }
    top++;
    stackArray[top] = data;
  }
  public int pop() {
    if (isEmpty()) {
      System.out.println("stack underflow");
      return -1;
    }
    int data = stackArray[top];
    top--;
    return data;
  }
  public int peek() {
    if(isEmpty()) {
      System.out.println("stack is empty);
      return -1;
    }
    return stackArray[top];
  }
  public boolean isEmpty() {
    return top == -1;
  }
  public boolean isFull() {
    return top == stackArray.length - 1;
  }
}
