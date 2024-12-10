#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
  int top;
  int array[MAX_SIZE];
} Stack;

// function to initialize stack
void initialize(Stack *stack) {
  stack->top = -1;
}

// function to check if stack is empty
int isEmpty(Stack *stack) {
  return stack->top == -1;
}

// function to check if stack is full
int isFull(Stack *stack) {
  return stack->top == MAX_SIZE - 1;
}

// function to push element onto stack
void push(Stack *stack, int data) {
  if(isFull(stack)) {
    printf("stack overflow\n");
    return;
  }
  stack->array[++stack->top] = data;
}

// function to pop element from stack
int pop(Stack *stack) {
  if(isEmpty(stack)) {
      printf("stack underflow\n");
      return -1;
  }
  return stack->array[stack->top--];
}

// function to peek at top element of stack
int peek(Stack *stack) {
  if(isEmpty(stack)) {
    printf("stack is empty\n");
    return -1;
  }
  return stack->array[stack->top];
}

int main() {
  Stack stack;
  initialize(&stack);
  push(&stack, 10);
  push(&stack, 20);
  push(&stack, 30);

  printf("popped element: %d\n", pop(&stack));
  printf("top element: %d\n", peek(&stack));
  return 0;
}
