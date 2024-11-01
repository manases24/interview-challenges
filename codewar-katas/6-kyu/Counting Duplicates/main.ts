// Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// Link: https://www.codewars.com/kata/counting-duplicates
export function duplicateCount(text: string): number {
  // La funcion debe retonar la cantidad total de caracteres alfabeticos y digitos numeros
  // que aparecen más de una vez en el string

  // Lo que quiero hacer es guardar en un objeto los caracteres/digitos que se repiten
  // Luego recorrer el map para verificar si un caracter/digito se encuentra más de 1 vez
  text = text.toLowerCase();
  let map: { [key: string]: number } = {};
  for (let index = 0; index < text.length; index++) {
    if (map[text[index]]) {
      map[text[index]] += 1;
    } else {
      map[text[index]] = 1;
    }
  }
  // Aca hago un recuento de cuántos caracteres/digitos se encuentra más de 1 vez
  // y lo retorno
  let duplicateCount = 0;
  for (const key in map) {
    if (map[key] > 1) {
      duplicateCount += 1;
    }
  }
  return duplicateCount;
}
// Un "recuento" es el proceso de contar o registrar la cantidad de veces que ocurre algo en particular
// Entrada: un string de caracteres alfabéticos y dígitos numéricos
// Salida: la cantidad de veces que se repite el caracter
