
 Code:

#include <stdio.h>
#include <stdlib.h>

struct node {
    int num;                 
    struct node *nextptr;       // Address
}*stnode;     

void AppendNodeList(int num) {
  struct node *fnNode, *tmp;
  fnNode = (struct node*)malloc(sizeof(struct node));
  if(fnNode == NULL) {
    printf(" Memory can not be allocated")
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