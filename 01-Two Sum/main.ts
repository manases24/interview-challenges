/**
 * Dado un array de números enteros `nums` y un entero `target`, esta función devuelve los índices
 * de dos números del array cuya suma es igual al `target`. Se puede asumir que siempre habrá
 * una solución válida y no se puede usar el mismo elemento dos veces. La respuesta puede
 * ser devuelta en cualquier orden.
 *
 * Usaremos un mapa (hash map) para almacenar los números que ya hemos visto mientras
 * iteramos a través del array. En cada iteración, verificamos si el complemento del número
 * actual (la diferencia entre el target y el número actual) ya está en el mapa. Si lo está,
 * eso significa que hemos encontrado los dos números que suman el target, y devolvemos
 * sus índices.
 *
 * @param nums - El array de números enteros.
 * @param target - El número entero que buscamos obtener como suma de dos elementos del array.
 * @returns - Un array de dos índices cuyos valores suman el target.
 *
 * Ejemplo:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] (porque nums[0] + nums[1] == 9)
 */
