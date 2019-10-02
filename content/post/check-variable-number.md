---
path: "/blog/check-variable-number"
date: "2019-05-04"
title: "How to Check if a Variable is a Number"
tags: ["number"]
---
##Editando Escribiendo con Markdown
Podemos comprobar si una variable es un número de múltiples maneras.
## isNaN
Podemos comprobarlo llamando a `isNaN` con la variable como argumento. También detecta si el contenido de una cadena es un número. Por ejemplo:
```
isNaN(1) // false
isNaN('1') // false
isNaN('abc') // true
```
**Note:** `isNaN(null)` is `true` .
### typeof Operator
Podemos usar el operador `typeof` antes de una variable para comprobar si es un número, así:
```
typeof 1 == 'number' // true
typeof '1' == 'number' // false
```
![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)