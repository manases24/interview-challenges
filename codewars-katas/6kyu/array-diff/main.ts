/*
Tu objetivo en este kata es implementar una función de diferencia, que reste una lista de otra y devuelva el resultado.

La función debe eliminar todos los valores de la lista 'a' que estén presentes en la lista 'b', manteniendo su orden.

Por ejemplo:
array_diff([1, 2], [1]) // debe devolver [2]

Si un valor está presente en 'b', todas sus ocurrencias deben ser eliminadas de 'a':
array_diff([1, 2, 2, 2, 3], [2]) // debe devolver [1, 3]
*/

// Crear una funcion que compare los valores del array A con el array B
// Si algun valor del array A esta presente en el array B, ese valor se debe eliminar del array A
// Debo devolver solo los valores de A que no estén en el array B
export function arrayDiff(a: number[], b: number[]): any[] {
  const hashTable: { [key: number]: boolean } = {};

  // Llenar la tabla hash con los elementos de b
  for (let i = 0; i < b.length; i++) {
    hashTable[b[i]] = true;
  }

  return a.filter((num) => !hashTable[num]);
}
