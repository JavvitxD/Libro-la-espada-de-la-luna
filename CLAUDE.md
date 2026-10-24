# Instrucciones para escribir "La espada de la luna"

Este repositorio es un libro publicado con GitHub Pages (Jekyll).

## Antes de escribir o editar un capítulo
Lee siempre todo `planificacion/` (personajes, mundo, trama, capítulos, estilo) y el capítulo
anterior completo, para mantener coherencia de nombres, tono, hechos y voz de cada personaje.

## Formato de los capítulos
- Un archivo por capítulo en `capitulos/`, nombre `NN-titulo-en-minusculas.md` (ej. `04-la-torre.md`).
- Encabezado obligatorio:
  ```
  ---
  title: "Título del capítulo"
  numero: 4
  ---
  ```
  `numero` decide el orden en el índice y los botones anterior/siguiente.
- Cambios de escena: una línea con `***`.
- Diálogos con raya (—), como en la tipografía editorial en español.
- No poner el título como `#` dentro del texto: el diseño ya lo muestra.

## Después de escribir
Actualiza el **Estado** del capítulo en `planificacion/capitulos.md` y anota en
`planificacion/` cualquier dato nuevo que se haya inventado (nombres, lugares, reglas).
