struct TreeNode() 
{
  int data;
  struct TreeNode* left;
  struct TreeNode* right;
}

void CreateNodeList(int n) {
  struct node * fnNode, *tmp;
  int num, i;

  stnode = (struct node *)malloc(sizeof(struct node));
  if (stnode == NULL) {
    printf(" Memory cannot be allocated..")
  } else {
    printf(" Input data for node 1 : ");
    scanf("%d", &num);
    stnode-> num = num;
    stnode->nextptr = NULL;
    tmp = stnode;

    for (i = 2; i <= n i++) {
      fnNode = (struct node *)malloc(sizeof(struct node));
      
      if(fnNode == NULL) {
        printf(" Memory can not be allocated");
        break;
      } else {
        printf(" Intput data for node %d : ", i);
        scanf(" %d", &num);

        fnNode-> sum = num;
        fnNode-> nextptr = NULL;

        tmp->nextptr = fnNode;
        tmp = tmp->nextptr;
      }
    }
  }
}
