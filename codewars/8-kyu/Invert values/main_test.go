package main

import (
	"reflect"
	"testing"
)

func TestInvert(t *testing.T) {
	tests := []struct {
		input    []int
		expected []int
	}{
		{[]int{1, 2, 3, 4, 5}, []int{-1, -2, -3, -4, -5}},
		{[]int{1, -2, 3, -4, 5}, []int{-1, 2, -3, 4, -5}},
		{[]int{}, []int{}},
	}

	for _, test := range tests {
		result := Invert(test.input)
		if !reflect.DeepEqual(result, test.expected) {
			t.Errorf("Invert(%v) expected %v, but got %v", test.input, test.expected, result)
		}
	}
}
