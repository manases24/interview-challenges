**Problema: Electronics Shop**

Una persona quiere determinar el teclado y la unidad USB más cara que puede comprar con un presupuesto dado. Dado un listado de precios para teclados y unidades USB, y un presupuesto, encuentra el costo de comprarlos. Si no es posible comprar ambos artículos, devuelve -1.

#### Ejemplo

La persona puede comprar un teclado de 3 o uno de 1. Luego, puede comprar una unidad USB de 5, 2 o 8. Elige la opción más cara (el teclado de 3 y la unidad USB de 5), que suma 9.

#### Descripción de la Función

Completa la función `getMoneySpent` en el editor abajo.

**`getMoneySpent`** tiene los siguientes parámetros:

- `keyboards[n]`: los precios de los teclados.
- `drives[m]`: los precios de las unidades USB.
- `b`: el presupuesto.

**Retorna**:

- El máximo dinero que se puede gastar, o si no es posible comprar ambos artículos, retorna -1.

#### Formato de Entrada

- La primera línea contiene tres enteros separados por espacios: `b`, `n` y `m`, el presupuesto, el número de modelos de teclados y el número de modelos de unidades USB.
- La segunda línea contiene enteros separados por espacios, los precios de cada modelo de teclado.
- La tercera línea contiene enteros separados por espacios, los precios de las unidades USB.

#### Restricciones

- El precio de cada artículo está en el rango de [1, 1000].

#### Ejemplo de Entrada 0

```
10 2 3
3 1
5 2 8
```

#### Ejemplo de Salida 0

```
9
```

#### Explicación 0

Compra el teclado de 3 y la unidad USB de 5, lo que suma un total de 9.

#### Ejemplo de Entrada 1

```
5 1 1
4
5
```

#### Ejemplo de Salida 1

```
-1
```

#### Explicación 1

No hay forma de comprar un teclado y una unidad USB porque el precio de ambos artículos excede el presupuesto de 5, por lo que se devuelve -1.

---

#### Electronics Shop - Descripción del Problema

Este problema consiste en determinar el gasto máximo posible para comprar un teclado y una unidad USB sin exceder el presupuesto dado. El algoritmo debe ser capaz de calcular la máxima combinación de precio posible, sumando un teclado y una unidad USB, y retornando el total si se puede comprar ambos artículos. En caso contrario, se debe retornar `-1`.

#### Requisitos de Entrada

- Se proporcionan tres valores: el presupuesto disponible, el número de modelos de teclados y el número de modelos de unidades USB.
- Luego, se proporcionan dos listas: los precios de los teclados y los precios de las unidades USB.

#### Requisitos de Salida

El algoritmo debe retornar el precio máximo posible que se puede gastar en los dos artículos sin superar el presupuesto, o `-1` si no es posible comprar ambos artículos dentro del presupuesto.
