#include <iostream>
#include <ctime>
using namespace std;

string timestamp() {
  time_t now = time(0);
  char* dt = ctime(&now);
  return dt;
};
