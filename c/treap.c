// data structure that combines the properties of a BST and a heap
// maintains BST property for efficient search operations and the heap
// property for efficient insertion and deletion 

#include <stdio.h>
#include <stdlib.h>

struct Node {
  int key;
  int priority;
  struct Node *left, *right;
};

// function to create a new node
struct Node* newNode(int key, int priority) {
  struct Node* node = (struct Node*)malloc(sizeof(struct Node));
  node->key = key;
  node->priority = priority;
  node->left = node->right = NULL;
  return node;
}

// function to perform right rotation
struct Node* rightRotate(struct Node* y) {
  struct Node* x = y->left;
  struct Node* T2 = x->right;
  x->right = y;
  y->left = T2;
  return x;
}

// function to perform left rotation
struct Node* leftRotate(struct Node* x) {
  struct Node* y = x->right;
  struct Node* T2 = y->left;

  y->left = x;
  x->right = T2;
  return y;
}

// function to insert new node into treap
struct Node* insert(struct Node* root, int key, int priority) {
  if(root == NULL)
    return newNode(key, priority);

  if(key < root->key)
    root->left = insert(root->left, key, priority);
  else if(key > root->key)
    root->right = insert(root->right, key, priority);
  else
    return root;

  if(root->left != NULL && root->left->priority > root->priority)
    root = rightRotate(root);
  if(root->right != NULL && root->right->priority > root->priority)
    root = leftRotate(root);
  return root;
}


// function to search for key in treap
struct Node* search(struct Node* root, int key) {
  if(root == NULL || root->key == key)
    return root;
  if(key < root->key)
    return search(root->left, key);
  else
    return search(root->right, key);
}

// function to delete node from treap
struct Node* deleteNode(struct Node* root, int key) {
  if(root == NULL)
    return root;
  if(key < root->key)
    root->left = deleteNode(root->left, key);
  else if(key > root->key)
    root->right = deleteNode(root->right, key);
  else {
    if(root->left == NULL) {
      struct Node* temp = root->right;
      free(root);
      return temp;
    } else if(root->right == NULL) {
        struct Node* temp = root->left;
        free(root);
        return temp;
    }
    if(root->left->priority > root->right->priority) {
      root = rightRotate(root);
      root->right = deleteNode(root->right, key);
    } else {
      root = leftRotate(root);
      root->left = deleteNode(root->left, key);
    }
  }
  return root;
}


// function to print treap in inorder traversal
void inorderTraversal(struct Node* root) {
  if(root != NULL) {
    inorderTraversal(root->left);
    printf("%d ", root->key);
    inorderTraversal(root->right);
  }
}
int main() {
  struct Node* root = NULL;
  root = insert(root, 10, 20);
  root = insert(root, 5, 30);
  root = insert(root, 15, 10);
  root = insert(root, 3, 40);
  root = insert(root, 7, 25);

  printf("inorder traversal of trep: ");
  inorderTraversal(root);

  printf("\nDeleted 10\n");
  root = deleteNode(root, 10);

  printf("inorder traversal of treap after deletion: ");
  inorderTraversal(root);

  return 0;
}
