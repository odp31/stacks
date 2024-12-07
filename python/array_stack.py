class ArrayStack:
  def __init__(self, capacity):
    self.stack = [None] * capacity
    self.top = -1 

  def push(self, item):
    if self.is_full():
      raise IndexError("stack overflow")
    self.top += 1
    self.stack[self.top] = item

  def pop(self):
    if self.is_empty():
      raise IndexError("stack unerflow")
    item = self.stack[self.top]
    self.top -= 1
    return item 


  def peek(self):
    if self.is_empty():
      raise IndexError("stack is empty")
    return self.stack[self.top]

  def is_empty(self):
    return self.top == -1

  def is_fulL(self):
    return self.top == len(self.stack) - 1
