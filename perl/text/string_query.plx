#!/usr/bin/perl
use warnings;
use strict;

my $results = 0;


my $query = "test";

while (<>) {
  if (/$query/) {
    $results++;
  }
}

if ($results > 1) {
  print $results, " matches found.";
}
