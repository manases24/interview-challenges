### Code 

```rust
impl Solution {
    pub fn longest_common_prefix(input: Vec<String>) -> String {
        input.into_iter().reduce(|acc,cur|{
            acc.chars()
               .zip(cur.chars())
               .take_while(|(a,c)| a== c)
               .map(|(c,_)|c)
               .collect()
        }).unwrap()
    }
}
```

El prefijo común (LCP) más largo entre `input[i+1]` e `input[i+2]` siempre será tan corto o más corto que entre `input[i]` e `input[i+1]`

Esto significa que este problema (tomando como ejemplo la entrada ["flight","flow","flip"]) se puede resolver de la siguiente manera `LCP("flat",LCP("flip",LCP("flow", "flight")))`:

La llamada recursiva de una operación sobre el resultado anterior de esa operación es un ejemplo clásico de Iterator::reduce


1. Aplicar `reduce` en la entrada.

2. `acc` comienza como la primera cadena en la entrada

3. `cur` comienza como la segunda cadena y se convertirá en cada cadena a medida que iteremos a través de la entrada

4. zip `acc` y `cur` creará un iterador sobre tuplas que representan pares de `acc[i], cur[i]`. Recortará el más largo al tamaño del más corto.

5. tome tantos caracteres como sea posible mientras sean iguales en cada cadena comprimida

6. olvidarse de un elemento de la tupla, para tener un iterador sobrechar

7. `collect` lo mete en un String y devuélve desde el cierre. Este será `acc` el argumento en la próxima iteración.

8. después de la iteración, accse devolverá el valor final. unwrapes necesario porque reducedevuelve unOption

### Complejidad

***Complejidad del tiempo:***

O(n*s) , donde s es el LCP más corto hasta el momento.

***Complejidad espacial:***

O (1)