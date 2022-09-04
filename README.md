![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>I took this photo in the beautiful Italian town of Tropea, two years ago. The city is towering above the beach, a unique scene! The water was crystal clear and a beautiful blue.
<span>Photo by <a href="https://unsplash.com/@pirye?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Amelie &amp; Niklas Ohlrogge</a> on <a href="https://unsplash.com/s/photos/travel-landscapes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Ejercicio: Clases
El objetivo de este ejercicio es introducir los conceptos básicos relacionados con la programación orientada a objetos:
- Clase
- Objeto
- Método
- Atributo
- Método constructor
## Requerimientos funcionales

1. (44 Puntos) Programar la clase `Plane`. Deberá incluir los siguientes:
   - Atributos
     - `Number positionX`
     - `Number positionY`
   - Métodos
     - (8 puntos) `constructor()` recibe valores iniciales para `positionX` y `positionY`.
     - (8 puntos) `fire(type)` regresa el mensaje fire + el valor de type! Por ejemplo, si type=bullet, regresa fire bullet!.
     - (7 puntos) `moveUp(value)` incrementa el valor de `positionY` en `value` veces y regresa el valor actualizado. El valor máximo de `positionY` es 24, es decir no puede incrementar a más de 24.
     - (7 puntos) `moveDown(value)` decrementa el valor de `positionY` en `value` veces y regresa el valor actualizado. El valor mínimo  de `positionY` es cero.
     - (7 puntos) `moveLeft(value)` decrementa el valor de `positionX` en `value` veces y regresa el valor actualizado. El valor mínimo de `positionX` es cero
     - (7 puntos) `moveRight(value)` incrementa el valor de `positionX` en `value` veces y regresa el valor actualizado. El valor máximo de `positionX` es 80.
  
2. (28 Puntos) Programar la clase `Property`. Deberá incluir los siguientes:
   - Atributos
     - `Number width`
     - `Number height`
     - `Number priceM2` precio por metro cuadrado
     - `String address` dirección de la propiedad
   - Métodos
     - (7 puntos) `constructor()` recibe valores iniciales para `width`, `height`, `priceM2` y `address`
     - (7 puntos) `getArea()` regresa el tamaño del área de la propiedad.
     - (7 puntos) `getPerimeter()` regresa el tamaño del perímetro de la propiedad.
     - (7 puntos) `getPrice()` regresa el precio de la propiedad
  
3. (28 puntos) Programar la clase `Number`. Deberá incluir los siguientes:
   - Atributos
     - `Number value` valor del número
   - Métodos
     - (7 puntos) `constructor()` recibe valor inicial de `value`
     - (7 puntos) `isEven()` regresa `true` si el `value` es par o `false` si no es
     - (7 puntos) `isPrime()` regresa `true` si el `value` es primo o `false`so no es
     - (7 puntos) `isPositive()` regresa `true` si el `value` es positivo o `false` si no lo es.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
