// Who likes it?
// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
export const likes = (a: string[]): string => {
  // Recorrer el array de string
  // Validar si el array es vacio para devolver un mensaje especifico para ese array
  // Validar cuantos elementos tiene el array
  // Si el array tiene entre uno y tres elementos, se debe devolver el mensaje con los tres elementos del array
  // Si tiene más de tres elementos, se debe devolver los dos primeros elementos y los ultimos elementos en numero con el mensaje

  if (!a.length) return "no one likes this";

  while (a.length > 0) {
    if (a.length === 1) {
      return `${a[0]} likes this`;
    }
    if (a.length === 2) {
      return `${a[0]} and ${a[1]} like this`;
    }
    if (a.length === 3) {
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    }
    if (a.length > 3) {
      return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
  }
  return "";
};
// Devolver un mensaje con los nombres de las personas a las que le gusta un articulo
// Entrada: array de string
// Salida: retornar un string (mensaje)
