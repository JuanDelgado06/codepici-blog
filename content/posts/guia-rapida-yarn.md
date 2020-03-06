---
canonical_url: false
path: /guia-rapida-de-yarn
title: Guía rápida de Yarn
published: true
description: >-
  Yarn es un gestor de paquetes rápido, confiable y seguro, es una excelente
  alternativa a npm ya que yarn es mucho mas rápido porque almacena en cache los
  paquetes descargados y realiza operaciones en paralelo para maximizar la
  utilización de recursos. En este post te voy a mostrar las cosas mas
  importantes que debes de saber, como descargarlo y como utilizarlo.
date: 2019-10-15T00:00:00.000Z
cover_image: ./images/yarn-guia.jpg
tags:
  - herramienta
  - guía
---

**Yarn** es un gestor de paquetes rápido, confiable y seguro, es una excelente alternativa a npm ya que **yarn** es mucho mas rápido porque almacena en cache los paquetes descargados y realiza operaciones en paralelo para maximizar la utilización de recursos. En este post te voy a mostrar las cosas mas importantes que debes de saber, como descargarlo y como utilizarlo.

## Instalación

Te mostrare dos maneras de instalar **Yarn**, estas son :

> Deberás de tener Instalado [Node.js](https://nodejs.org/es/) para poder utilizarlo

1. Descargando el Instalar de Window

	- **Win**: [Descargar Instalador](https://yarnpkg.com/latest.msi)


2. Esta es la manera mas rápida y fácil de instalar **Yarn**, ejecuta en tu consola o terminal lo siguiente:

```
npm install --global yarn
```

Ahora comprueba que **Yarn** se instalo correctamente ejecutando el siguiente comando:

```
yarn --version 
```

Si todo salio bien deberá de aparecerte la versión mas reciente de **Yarn**

## Como Utilizarlo

Después de instalar **Yarn** puedes empezar a utilizarlo ejecutando un simple comando:

```
yarn init 
```

> Puedes utilizar **yarn** incluso si ya estabas trabajando con **npm**, lo único que debes de hacer es borrar el archivo ***package-lock.json*** para que **yarn** trabaje sin problemas

  

- Instalar todas las dependencias de un proyecto:

```
yarn  
```

```
yarn install 
```
- Instalar dependencias: 

``` 
yarn add [package] // ejemplo: yarn add vue 

yarn add [package]@[version] // ejemplo: yarn add vue@[2.6.8]

yarn add [package] --dev // ejemplo: yarn add vue --dev

```

- Instalar globalmente dependencias

```
yarn global add [package] // ejemplo: yarn global add @vue/cli

```  

- Actualizar dependías:

```
yarn upgrade [package] - ejemplo: yarn upgrade vue
```

- Eliminar dependías:

```
yarn remove[package] - ejemplo: yarn remove vue
```

  

Y listo eso es todo por este post, ya aprendiste como poder utilizar **Yarn** en tus proyectos de una manera rápida y fácil. Cualquier duda o sugerencia la puedes dejar en los comentarios.
