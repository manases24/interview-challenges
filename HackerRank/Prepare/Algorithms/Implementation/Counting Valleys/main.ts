/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

export function countingValleys(steps: number, path: string): number {
  // El nivel del mar comienza en 0, ya que es en ese nivel donde el excursionista empieza y termina la caminata
  // El numero de valles se inicializa en 0
  // Voy a recorrer cada paso de la caminata representado por "U" (subida) y "D" (bajada)
  // Si el paso es "U", aumentamos seaLevel en 1
  // Si el paso es "D", disminuimos seaLevel en 1
  // Luego voy a comparar si seaLevel es menor o igual a 0 y el paso es U
  // Si es verdadero voy encontre un valle caso contrario no encontre un valle
  // voy a guardar la cantidad de valles encontrados y retornarlo
  let seaLevel = 0;
  let valley = 0;
  for (let index = 0; index < steps; index++) {
    if (path[index] === "U") {
      seaLevel++;
    }
    if (path[index] === "D") {
      seaLevel--;
    }
    if (seaLevel === 0 && path[index] === "U") {
      valley++;
    }
  }
  return valley;
}

// Un excursionista anota los pasos que da en su caminata
// Su caminata empieza en el nivel del mar y termina en el nivel del mar
// Si sube lo anota como U (up) y si baja lo anota como D (down)
// En base a la caminata del excursionista (U o D) debo encontrar la cantidad
// de valles que atraveso el excursionista
// Un valle comienza bajando desde el nivel del mar y
// termina con un paso de subida de regreso al nivel del mar

// Lo que debo hacer es encontrar la cantidad de valles que atraveso el excursionista
// teniendo en cuenta sus pasos, si sube (U) o baja (D)
// Entrada: (steps: pasos que da / path: camino que recorre)
// Salida: La cantidad de valles que recorrio
