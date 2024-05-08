package main

import (
	"errors"
)

func assertPositive(a int) error {
	if a <= 0 {
		return errors.New("Assertion failure")
	}
	return nil
}
