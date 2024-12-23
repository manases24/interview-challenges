// Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// Link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/typescript
export function dnaStrand(dna: string): string {
  const DNAComplement: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "T",
  };

  return dna
    .split("")
    .map((elem) => DNAComplement[elem])
    .join("");
}

// El ácido desoxirribonucleico (ADN) es una sustancia química que se encuentra en el núcleo de las células
// y lleva las "instrucciones" para el desarrollo y funcionamiento de los organismos vivos.
// Si quieres saber más: http://en.wikipedia.org/wiki/DNA
// En las cadenas de ADN, los símbolos "A" y "T" son complementarios entre sí, como "C" y "G".
// Su función recibe un lado del ADN (cadena, excepto Haskell); necesitas devolver el otro lado complementario.
// La cadena de ADN nunca está vacía o no hay ADN en absoluto (nuevamente, excepto en Haskell).
// Más ejercicios similares se encuentran aquí: http://rosalind.info/problems/list-view/ (fuente)
