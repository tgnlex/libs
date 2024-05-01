#include <stdio.h>
#include <stdlib.h>
struct node {
    int num;                    // Data 
    struct node *nextptr;       // Address 
}*stnode;     

void ReverseList() {
  struct node *prevNode, *curNode;

  if (stdnode != NULL) {
    prevNode = stnode;
    curNode = stnode->nextptr;
    stnode = stnode->nextptr;

    prevNode->nextptr = NULL;
    
    while(stnode != NULL) {
      stnode = stnode->nextptr;
      curNode->nextptr = prevNode;
      
      prevNode = curMode;
      curNode = stnode;
    }
    stnode = prevNode;
  }
}