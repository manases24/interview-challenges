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

// Debo escribir una función que reciba por parámetro un string.
// El string puede contener los caracteres: (), [], {}.
// El objetivo es determinar si el string es válido según estas reglas:
// 1. Cada apertura ( { [ debe tener un cierre correspondiente ) } ].
// 2. Los tipos de apertura y cierre deben coincidir.
//    Por ejemplo: { } es válido, pero { ] no lo es.
// 3. La cadena debe estar balanceada, lo que significa que:
//    - Cada apertura debe tener su cierre correspondiente en el orden correcto.
//    - No puede haber un cierre sin su apertura previa.
//    - Ejemplo válido: `{[()()]}`.
//    - Ejemplo inválido: `{[(])}`.
// 4. El orden debe ser correcto: los paréntesis, corchetes y llaves deben estar correctamente anidados.
//    Ejemplo válido: `{[()]}` (el cierre del paréntesis ocurre antes del cierre del corchete).
//    Ejemplo inválido: `([)]` (el cierre del paréntesis ocurre después del cierre del corchete).
// La función debe devolver `true` si el string es válido y `false` si no lo es.
