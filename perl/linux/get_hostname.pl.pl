my $hostname = File->new(
	path => '/etc/hostname',
	content => "hello\n",
	last_mod_time => 1734979790,
);
sub print_info {
    my $self = shift;
    print "This file is at ", $self->path, "\n";
}