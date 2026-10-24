# La espada de la luna

Libro en línea, capítulo a capítulo, publicado con GitHub Pages.

## Estructura

```
capitulos/          ← un archivo Markdown por capítulo (aquí escribes)
planificacion/      ← personajes, mundo, trama, plan de capítulos (no se publica)
assets/img/         ← sube aquí la imagen de portada
assets/css/estilo.css ← colores y tipografía
_config.yml         ← título, subtítulo, autor e imagen de portada
```

## Editar o añadir un capítulo

Cada capítulo empieza con un pequeño encabezado:

```markdown
---
title: "El filo de plata"
numero: 1
---

Aquí va el texto del capítulo...
```

- `numero` decide el orden en el índice y en los botones Anterior / Siguiente.
- Para un cambio de escena escribe `***` en una línea sola.
- Para crear un capítulo nuevo, copia uno existente, cámbiale el nombre
  (ej. `capitulos/04-la-torre.md`), el `title` y el `numero`. Aparece solo en el índice.

Puedes editar directamente desde github.com: abre el archivo, pulsa el lápiz ✏️ y guarda (*Commit changes*).

## Poner la imagen de portada

1. Sube la imagen a `assets/img/` (por ejemplo `portada.jpg`). Formato vertical 2:3 queda mejor.
2. En `_config.yml` cambia `imagen_portada: ""` por `imagen_portada: "/assets/img/portada.jpg"`.

## Activar GitHub Pages

1. Fusiona esta rama con `main` (o usa la rama que prefieras en el paso 4).
2. En GitHub, entra al repositorio → **Settings** (Configuración).
3. En el menú izquierdo, **Pages**.
4. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
   En *Branch* elige `main` y la carpeta `/ (root)`. Pulsa **Save**.
5. Espera 1–2 minutos. La dirección aparecerá arriba en esa misma página, algo como
   `https://javvitxd.github.io/libro-la-espada-de-la-luna/`.

Cada vez que guardes un cambio en esa rama, la web se actualiza sola en uno o dos minutos.

> Si el repositorio es privado, GitHub Pages requiere un plan de pago; con repositorio público es gratis.

## Probar en tu computadora (opcional)

```bash
bundle install
bundle exec jekyll serve
# abre http://localhost:4000
```
