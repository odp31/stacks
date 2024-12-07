import java.util.PriorityQueue;

public class PriorityStack<T> {
  private PriorityQueue<T> queue;

  public PriorityStack() {
    queue = new PriorityQueue<>();
  }
  public void push(T element) {
    queue.offer(element);
  }
  public T pop() {
    return queue.poll();
  }
  public T peek() {
    return queue.peek();
  }
  public boolean isEmpty() {
    return queue.isEmpty();
  }
}
