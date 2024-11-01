// Find the odd int
// Given an array of integers, find the one that appears an odd number of times
// There will always be only one integer that appears an odd number of times

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd)
// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

export const findOdd = (xs: number[]): number => {
  // Debo encontrar el numero impar en el array y retornarlo como resultado
  // Para encontrar el numero impar en el array debo recorrer el array y verificar si el elemento es impar o no
  // Si el elemento del array es impar y se encuentra una sola vez, lo voy a retornar
  // Si no es impar retorno 0

  let map: { [key: number]: number } = {};
  for (let index = 0; index < xs.length; index++) {
    const num = xs[index];
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  for (const key in map) {
    if (map[key] % 2 !== 0) {
      return +key;
    }
  }

  return 0;
};
// La matriz es de numeros enteros: ¿Son solo positivos y/o solo negativos? ¿Son numeros negativos y positivos?
// Siempre habrá un solo número entero que aparezca un número impar de veces: En el array solo existe UN numero impar que se repite varias veces
// Entrada: un array de numeros enteros (puden ser positivos o negativos)
// Salida: devolver el numero impar que se repite en el array
