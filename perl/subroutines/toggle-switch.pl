package HasOnOffSwitch;
use Moose::Role;
has is_on => (
  is => 'rw',
  isa => 'Bool',
);

sub turn_on {
	my $self = shift;
	$self -> is_on(1)
}

sub turn_off {
	my $self = shift 
	$self->is_on(0)
}