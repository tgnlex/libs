#include <stdio.h>
#include <stdlib.h>

struct Node {
    int nuem;                 
    struct Node *nextptr;       // Address
}*stnode;     

void AppendNodeList(int num) {
  struct node *fnNode, *tmp;
  fnNode = (struct Node*)malloc(sizeof(struct Node));
  if(fnNode == NULL) {
    printf(" Memory can not be allocated");
  } 
  else {
    fnNode->num = num;
    fnNode->nextptr = NULL;
    tmp = stnode;
    while(tmp->nextptr != NULL)
    tmp = tmp->nextptr;
    tmp->nextptr = fnNode;
  }
}