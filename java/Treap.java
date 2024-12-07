// combines properties of binary search tree and a heap 

import java.util.Random;
public class Treap<T extends Comparable<T>> {
  private Node<T> root;
  private Random random;

  private static class Node<T> {
    T key;
    int priority;
    Node<T> left, right;

    public Node(T key) {
      this.key = key;
      this.priority = new Random().nextInt();
    }
  }
  public Treap() {
    random = new Random();
  }
  public void insert(T key) {
    root = insert(root, key);
  }
  private Node<T> insert(Node<T> node, T key) {
    if(node == null) {
      return new Node<>(key);
    }
    if(key.compareTo(node.key) < 0) {
      node.left = insert(node.left, key);
    } else if (key.compareTo(node.key) > 0) {
      node.right = insert(node.right, key);
    }
    if(node.left != null && node.left.priority > node.priority) {
      node = rotateRight(node);
    } else if (node.right != null && node.right.priority > node.priority) {
      node = rotateLeft(node);
    }
    return node;
  }
  public void delete(T key) {
    root = delete(root, key);
  }
  private Node<T> delete(Node<T> node, T key) {
    if(node == null) {
      return null;
    }
    if(key.compareTo(node.key) < 0) {
      node.left = delete(node.left, key);
    } else if (key.compareTo(node.key) > 0) {
      node.right = delete(node.right, key);
    } else {
      if(node.left == null) {
        return node.right;
      } else if(node.right == null) {
        return node.left;
      } else {
        if(node.left.priority > node.right.priority) {
          node = rotateRight(node);
          node.right = delete(node.right, key);
        } else {
          node = rotateLeft(node);
          node.left = delete(node.left, key);
        }
      }
    }
    return node;
  }
  private Node<T> rotateRight(Node<T> node) {
    Node<T> x = node.left;
    node.left = x.right;
    x.right = node;
    return x;
  }
  private Node<T> rotateLeft(Node<T> node) {
    Node<T> x = node.right;
    node.right = x.left;
    x.left = node;
    return x;
  }
}
