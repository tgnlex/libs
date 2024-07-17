#include <iostream>

use namespace std; 

struct date_num {
  int day;
  int month;
  int year;
};
struct date_str {
  string month;
  string day_of_week;
  int day;
  int year
};
struct month {
  int month_num;
  string month_name;
};
struct date_verbose {
  int day;
  string day_of_week;
  month month;
  int year;
};
