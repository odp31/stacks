# stack where elements are not simply pushed and popped in FILO order but instead based on priority
# higher priority elements are popped before lower ones 

import heapq

class PriorityQueue:
  def __init__(self):
    self.heap = []

  def push(self, item, priority):
    heapq.heappush(self.heap, (priority, item))

  def pop(self):
    return heapq.heappop(self.heap)[1]

  def peek(self):
    return self.heap[0][1]

  def is_empty(self):
    return len(self.heap) == 0
