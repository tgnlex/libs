#include <stdio.h>

void swap(int *, int *);
int n1, n2;

void swap(int *p, int *q) 
{
  int tmp;
  tmp = *p;
  *p = *q;
  *q=tmp;
}