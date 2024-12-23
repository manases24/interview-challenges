// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return if the string is valid, and if it's invalid.truefalse

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets , and curly braces . Thanks to for the idea![]{}@arnedag
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: . ()[]{}
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
export function validBraces(braces: string): boolean {
  return true;
}

// Debo escribir una función que reciba por parametro un string
// El string puede contener corchetes, llaves y/o parentesis
// Debo verificar que el string reciba las llaves {}
// Si recibe {} retorno verdadero pero si recibe { solamente o } solamente retorno falso
