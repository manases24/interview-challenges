package main

import (
	"testing"
)

func TestToAlternatingCase(t *testing.T) {
	tests := []struct {
		input    string
		expected string
	}{
		{"hello world", "HELLO WORLD"},
		{"HELLO WORLD", "hello world"},
		{"hello WORLD", "HELLO world"},
		{"HeLLo WoRLD", "hEllO wOrld"},
		{"12345", "12345"},
		{"1a2b3c4d5e", "1A2B3C4D5E"},
		{"String.prototype.toAlternatingCase", "sTRING.PROTOTYPE.TOaLTERNATINGcASE"},
	}

	for _, test := range tests {
		result := ToAlternatingCase(test.input)
		if result != test.expected {
			t.Errorf("ToAlternatingCase(%q) expected %q, but got %q", test.input, test.expected, result)
		}
	}
}
