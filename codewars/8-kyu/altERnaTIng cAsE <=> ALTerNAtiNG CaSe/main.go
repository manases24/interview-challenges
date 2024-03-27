package main

import (
	"unicode"
)

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// ToAlternatingCase("hello world"); // => "HELLO WORLD"
// ToAlternatingCase("HELLO WORLD"); // => "hello world"
// ToAlternatingCase("hello WORLD"); // => "HELLO world"
// ToAlternatingCase("HeLLo WoRLD"); // => "hEllO wOrld"
// ToAlternativeCase("12345"); // => "12345" (Non-alphabetical characters are unaffected)
// ToAlternativeCase("1a2b3c4d5e"); // => "1A2B3C4D5E"
// ToAlternativeCase("String.prototype.toAlternatingCase"); // => "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
// Link: https://www.codewars.com/kata/56efc695740d30f963000557/train/go

func ToAlternatingCase(str string) string {
	var result []rune
	for _, r := range str {
		if unicode.IsLower(r) {
			result = append(result, unicode.ToUpper(r))
		} else if unicode.IsUpper(r) {
			result = append(result, unicode.ToLower(r))
		} else {
			result = append(result, r)
		}
	}
	return string(result)
}
