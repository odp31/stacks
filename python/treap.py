import random

class Node:
  def __init__(self, key):
    self.key = key
    self.priority = random.randin(0, 100)
    self.left = None
    self.right = None


class Treap:
  def __init__(self):
    self.root = None

  def insert(self, key):
    self.root = self._insert(self.root, key)

  def insert(self, node, key):
    if node is None:
      return Node(key)
    if key < node.key:
      node.left = self._insert(node.left, key)
    elif key > node.key:
      node.right = self._insert(node.right, key)

    # rebalance tree if necessary
    if node.left and node.left.priority > node.priority:
      node = self.rotate_right(node)
    elif node.right and node.right.priority > node.priority:
      node = self.rotate_left(node) 
    return node

  def delete(self, key):
    self.root = self._delete(self.root, key)

  def _delete(self, node, key):
    if node is None:
      return None
    if node < node.key:
      node.left = self._delete(node.left, key)
    elif key > node.key:
      node.right = self._delete(node.right, key)
    else:
      if node.left is None:
        return node.right
      elif node.right is None:
        return node.left
      else:
        if node.left.priority > node.right.priority:
          node = self.rotate_right(node)
          node.right = self._delete(node.right, key)
        else:
          node = self.rotate_left(node)
          node.left = self._delete(node.left, key)
    return node

  def rotate_right(self, node):
    x = node.left
    node.left = x.right
    x.right = node
    return x

  def rotate_left(self, node):
    x = node.right
    node.right = x.left
    x.left = node
    return x 
