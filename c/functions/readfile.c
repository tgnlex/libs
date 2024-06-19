#include <stdio.h>
#include <stdlib.h>

void read(fname) {
    FILE *fptr;
    char fname[20];
    char str;
    fptr = fopen (fname, "r");
    if (fptr == NULL) {
        printf("File does not exixt or cannot be opened \n"); 
        exit(0);
    }
    printf("\n conents of %s is :\n", fname);
    str = fgetc(fptr);
    while (str != EOF) {
        printf("%c", str);
        str = fgetc(fptr);
    }
    fclose(fptr);
    printf("\n\n");
}
