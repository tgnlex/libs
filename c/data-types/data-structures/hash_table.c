struct KeyValue {
  char key[50];
  int value;
  struct KeyValue* next;
};

struct HashTable {
  int size;
  struct KeyValuePair** table;
};