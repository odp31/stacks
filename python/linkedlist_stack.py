class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

class LinkedListStack:
  def __init__(self):
    self.top = None

  def push(self, data):
    new_node = Node(data)
    new_node.next = self.top
    self.top = new_node

  def pop(self):
    if self.is_empty():
      raise IndexError("stack underflow")
    item = self.top.data
    self.top = self.top.next
    return item

  def peek(self):
    if self.is_empty():
      raise IndexError("stack is empty")
    return self.top.data

  def is_empty(self):
    return self.top is None
