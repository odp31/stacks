#include <stdio.h>
#include <stdlib.h>

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

// function to initialize stack
void initialize(struct Node** head_ref) {
  *head_ref = NULL;
}
// function to check if stack is empty
int isEmpty(struct Node* head) {
  return head == NULL;
}

// function to push element onto stack
void push(struct Node** head_ref, int data) {
  struct Node* new_node = newNode(data);
  // if stack is empty make new node point to itself
  if(*head_ref == NULL) {
    new_node->next = new_node;
    *head_ref = new_node;
    return;
  }
  new_node->next = (*head_ref)->next;
  (*head_ref)->next = new_node;
}

// function to pop element from stack
int pop(struct Node** head_ref) {
  if(isEmpty(*head_ref)) {
    printf("stack underflow\n");
    return -1;
  }
  if(*head_ref == (*head_ref)->next) {
    int data = (*head_ref)->data;
    free(*head_ref);
    *head_ref = NULL;
    return data;
  }
  struct Node* temp = (*head_ref)->next;
  (*head_ref)->next = temp->next;
  int data = temp->data;
  free(temp);
  return data;
}

// function to peek at top element of stack
int peek(struct Node* head) {
  if(isEmpty(head)) {
    printf("stack is empty\n");
    return -1;
  }
  return head->next->data;
}

int main() {
  struct Node* head = NULL;
  initialize(&head);

  push(&head, 10);
  push(&head, 20);
  push(&head, 30);

  printf("popped element: %d\n", pop(&head));
  printf("top element: %d\n", peek(head));

  return 0;
}
