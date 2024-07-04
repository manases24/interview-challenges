# Problema "Two Sum" de LeetCode

El nucleo del problema de "Two Sum" se trata de encontrar el complemento de cada número en el array para alcanzar el objetivo (target)

El complemento se refiere al número que, junto con el número actual del array, suma el valor objetivo (target).

#### Descripción:

Dado un array de números enteros `nums` y un entero `target`, debes encontrar los dos números en el array que sumen el valor `target`. Debes devolver los índices de estos dos números. Puedes asumir que cada entrada tendrá exactamente una solución, y no puedes usar el mismo elemento dos veces.

#### Ejemplo:

- **Entrada:** `nums = [2, 7, 11, 15]`, `target = 9`
- **Salida:** `[0, 1]`
- **Explicación:** `nums[0] + nums[1] = 2 + 7 = 9`, por lo tanto, los índices son `[0, 1]`.

### Solución:

Para resolver este problema de manera eficiente, podemos usar un diccionario (o hashmap) para almacenar los números y sus índices mientras iteramos a través del array. La idea es verificar en cada paso si el complemento de un número (es decir, `target - num`) ya existe en el diccionario. Si es así, hemos encontrado los dos números que suman el `target`.

### Paso a Paso del Algoritmo:

1. **Inicialización**:

   - Crear un diccionario vacío llamado `num_to_index` que se usará para almacenar cada número del array junto con su índice correspondiente.

2. **Iteración del Array**:

   - Recorrer el array `nums` usando un bucle. Para cada elemento en el array, obtener el índice `i` y el valor `num`.

3. **Cálculo del Complemento**:

   - Calcular el complemento del número actual `num` restando `num` del `target` (`complement = target - num`).

4. **Verificación del Complemento**:

   - Verificar si el `complement` calculado está presente en el diccionario `num_to_index`.
     - **Si el complemento está en el diccionario**:
       - Hemos encontrado la solución. Los índices de los dos números que suman el `target` son `[num_to_index[complement], i]`.
     - **Si el complemento no está en el diccionario**:
       - Agregar el número `num` al diccionario `num_to_index` con su índice `i` como valor (`num_to_index[num] = i`).

5. **Finalización**:
   - Continuar con la iteración hasta que se encuentre la solución. Según la descripción del problema, siempre hay una solución, por lo que no es necesario manejar el caso en que no se encuentre.

### Resumen:

- **Entrada:** Array de números enteros `nums` y un entero `target`.
- **Salida:** Índices de los dos números en el array que suman el `target`.

El algoritmo utiliza un diccionario para almacenar y verificar de manera eficiente los complementos de los números mientras recorre el array, garantizando que la solución se encuentre en un tiempo lineal `O(n)`.
