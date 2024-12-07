public class LinkedListStack {
  private Node top;

  private static class Node {
    int data;
    Node next;

    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }
  public void push(int data) {
    Node newNode = new Node(data);
    newNode.next = top;
    top = newNode;
  }
  public int pop() {
    if(isEmpty()) {
      System.out.println("stack underflow");
      return -1;
    }
    int data = top.data;
    top = top.next;
    return data;
  }
  public int peek() {
    if(isEmpty()) {
      System.out.println("stack is empty");
      return -1;
    }
    return top.data;
  }
  public boolean isEmpty() {
    return top == null;
  }
}
