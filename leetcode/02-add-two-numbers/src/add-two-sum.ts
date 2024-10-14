/**
 * Dadas dos listas enlazadas no vacías que representan dos números enteros no negativos,
 * donde los dígitos están almacenados en orden inverso y cada nodo contiene un solo dígito,
 * esta función suma los dos números y devuelve el resultado como una nueva lista enlazada.
 *
 * Cada número está representado en una lista enlazada en la que el primer nodo corresponde
 * al dígito de las unidades, el segundo al de las decenas, y así sucesivamente.
 *
 * Se puede asumir que los números no tienen ceros a la izquierda, excepto el propio número 0.
 *
 * El objetivo es recorrer ambas listas, sumando los valores correspondientes de cada nodo,
 * teniendo en cuenta un posible acarreo (carry) si la suma de los dígitos es mayor o igual a 10.
 * El acarreo se añade al siguiente par de dígitos. El proceso continúa hasta que se hayan
 * recorrido ambos números por completo.
 *
 * @param l1 - Lista enlazada que representa el primer número.
 * @param l2 - Lista enlazada que representa el segundo número.
 * @returns - Una nueva lista enlazada que representa la suma de los dos números.
 *
 * Ejemplo:
 * Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
 * Output: [7, 0, 8] (porque 342 + 465 = 807)
 *
 * Enlace al problema: https://leetcode.com/problems/add-two-numbers/description/
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return null;
}
