:

#include <stdio.h>
#include <stdlib.h>

struct node  {
    int num;             
    struct node *nextptr;   
}*stnode;

void PrependNodeList(int num) {
  struct node *fnNode;
  fnNode = (struct node*)malloc(sizeof(struct node));
  if(fnNode == NULL) {
    printf("Memory cannot be allocated")
  } else {
    fnNode->num = num;
    fnNode->nextptr = stnode;
    stnode = fnNode;
  }
}