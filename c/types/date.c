#include <stdio.h>

struct Date {
  int year;
  int month;
  struct Day {
    int day_of_month;
    enum Day_Name {
      MONDAY,
      TUESDAY ,
      WEDNSDAY,
      THURSDAY,
      FRIDAY,
      SATURDAY,      
      SUNDAY
    };
  };
};
