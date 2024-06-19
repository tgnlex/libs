#include <stdio.h>
#include <stdlib.h>
struct TreeNode() 
{
  int data;
  struct TreeNode* left;
  struct TreeNode* right;
}

struct TreeNode* createNode(int value) {
  struct TreeNode newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  if (newNode != NULL) {
    newNode -> data = value;
    newNode -> left = NULL;
    newNode -> right = NULL;
  }
  return newNode;
}

struct TreeNode* insertNode (struct TreeNode* root, int value) {
  if (root == NULL) {
    return createNode(value);
  }
  if (value < root -> data) {
    root -> left = insertNode(root-> left, value);
  }
  else if (value > root -> data) {
    root -> right = insertNode(root -> right, value);
  }
  return root;
}

void TreeTraversal(struct TreeNode* root) {
  if (root != NULL) {
    TreeTraversal(root->left);
    printf("%d ", root->data);
    TreeTraversal(root ->right);
  }
}
void FreeTree(struct TreeNode* root) {
  if (root != NULL) {
    FreeTree(root->left);
    FreeTree(root->right);
    Free(root);
  }
}
int main() {
  struct TreeNode* root = NULL;
  int nodeValue;
  char choice;

  do {
    printf("Input a value to insert => tree");
    scanf("%d", &nodeValue);
    root = insertNode(root, nodeValue);
    printf("Insert another node? [y/n]: ");
    scanf(" %c", &choice);
  } while (choice == 'y' || choice == 'Y');
    printf("\n In order traversal of the binary tree.");
    inOrderTraversal(root);
    printf("\n");
    freeTree(root);
  return 0;
}