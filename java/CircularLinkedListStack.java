public class CircularLinkedListStack {
  private Node top;

  private class Node {
    int data;
    Node next;

    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }
  public void push(int data) {
    Node newNode = new Node(data);
    if(isEmpty()) {
      newNode.next = newNode;
      top = newNode;
    } else {
      newNode.next = top.next;
      top.next = newNode;
      top = newNode;
    }
  }
  public int pop() {
    if(isEmpty()) {
      System.out.println("stack underflow");
      return -1;
    }
    int data = top.data;
    if(top == top.next) {
      top = null;
    } else {
      top = top.next;
    }
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
