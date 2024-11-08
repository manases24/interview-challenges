# Contando Valles

Un excursionista entusiasta mantiene un registro meticuloso de sus caminatas. Durante la última caminata, que constó de un número específico de pasos, se anotó si cada paso fue cuesta arriba (U) o cuesta abajo (D). Las caminatas siempre comienzan y terminan a nivel del mar, y cada paso hacia arriba o hacia abajo representa un cambio de una unidad en la altitud.

### Definiciones

- Una **montaña** es una secuencia de pasos consecutivos por encima del nivel del mar, que comienza con un paso de subida desde el nivel del mar y termina con un paso de bajada de regreso al nivel del mar.
- Un **valle** es una secuencia de pasos consecutivos por debajo del nivel del mar, que comienza con un paso de bajada desde el nivel del mar y termina con un paso de subida de regreso al nivel del mar.

Dado un conjunto de pasos que representan subidas y bajadas durante una caminata, encuentra y muestra la cantidad de valles que atravesó el excursionista.

### Ejemplo

En este caso, el excursionista primero entra en un valle profundo. Luego, sube y atraviesa una montaña, antes de regresar al nivel del mar y terminar la caminata.

### Descripción de la Función

Completa la función `countingValleys` en el editor de abajo.

- **Parámetros:**

  - `int steps`: el número de pasos en la caminata
  - `string path`: una cadena que describe el camino

- **Retorno**:
  - `int`: la cantidad de valles atravesados

### Formato de Entrada

La primera línea contiene un entero `steps`, el número de pasos en la caminata.  
La segunda línea contiene una cadena `path`, que describe el camino.

### Restricciones

- `steps` es un entero positivo.
- `path` es una cadena de caracteres que solo contiene 'U' (subida) y 'D' (bajada).

### Ejemplo de Entrada

```
8
UDDDUDUU
```

### Ejemplo de Salida

```
1
```

### Explicación

Si representamos el nivel del mar como `_`, un paso de subida como `/` y un paso de bajada como `\`, la caminata se puede visualizar de la siguiente manera:

```
_/\      _
   \    /
    \/\/
```

El excursionista entra y sale de un valle, por lo que el número de valles es `1`.
