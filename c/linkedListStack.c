#include <stdio.h>
#include <stdlib.h>

// node structure for the stack
struct Node {
  int data;
  struct Node* next;
};

// function to create a new node
struct Node* newNode(int data) {
  struct Node* node = (struct Node*)malloc(sizeof(struct Node));
  node->data = data;
  node->next = NULL;
  return node;
}

// function to push element onto stack
void push(struct Node** head_ref, int data) {
  struct Node* new_node = newNode(data);
  new_node->next = (*head_ref);
  (*head_ref) = new_node;
}

// function to pop element from stack
int pop(struct Node** head_ref) {
  if(*head_ref == NULL) {
    printf("stack underflow\n");
    return -1;
  }
  struct Node* temp = *head_ref;
  int popped = temp->data;
  (*head_ref) = temp->next;
  free(temp);
  return popped;
}

// function to peek at top element of stack 
int peek(struct Node* head) {
  if(head == NULL) {
    printf("stack is empty\n");
    return -1;
  }
  return head->data;
}

int main() {
  struct Node* head = NULL;
  push(&head, 10);
  push(&head, 20);
  push(&head, 30);

  printf("popped element: %d\n", pop(&head));
  printf("top element: %d\n", peek(head));

  return 0;
}
