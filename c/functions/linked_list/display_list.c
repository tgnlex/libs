struct TreeNode() 
{
  int data;
  struct TreeNode* left;
  struct TreeNode* right;
}

void DisplayList() {
  struct node *tmp;
  if (stnode == NULL) {
    printf(" List is empty");
  } else {
    tmp = stnode;

    while(tmp != NULL) {
      printf(" Data = %d\n" , tmp->num);
      tmp = tmp->nextptr;
    }
  }
}