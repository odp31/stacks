class Node:
  def __init__(self, data):
    self.data = data
    self.next = None


class CircularLinkedListStack:
  def __init__(self):
    self.top = None

  def push(self, data):
    new_node = Node(data)
    if self.is_empty():
      new_node.next = new_node
      self.top = new_node
    else:
      new_node.next = self.top.next
      self.top.next = new_node
      self.top = new_node


  def pop(self):
    if self.is_empty():
      raise IndexError("stack underflow")
    data = self.top.data
    if self.top == self.top.next:
      self.top = None
    else:
      self.top = self.top.next
    return data

  def peek(self):
    if self.is_empty():
      raise IndexError("stack is empty")
    return self.top.data

  def is_empty(self):
    return self.top is None
