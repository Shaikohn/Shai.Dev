# Shai.Dev

Portafolio bilingüe de Shai Kohn, construido con React, Vite y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Comprobaciones disponibles:

```bash
npm run lint
npm run build
```

## Editar proyectos

La identidad y el contenido compartido de los juegos están en `src/data/games.js`. La adaptación profesional y los proyectos adicionales están en `src/data/projects.js`.

- `featuredProjects`: casos principales con descripción, autoría, tecnologías, imágenes y enlaces.
- `additionalProjects`: tarjetas compactas de trabajos adicionales.
- El orden de cada arreglo determina el orden visual.
- `type` puede ser `mobile` o `web` y controla la galería.

Las imágenes se guardan en `src/assets/projects/<proyecto>/`.

## Editar textos e idiomas

Los textos generales en español e inglés están en `src/i18n/translations.js`. Los textos de cada proyecto viven junto con sus datos en `src/data/projects.js`.

El selector guarda la preferencia como `shai-dev-language` en `localStorage`. En una primera visita utiliza español si el idioma del navegador comienza con `es`, e inglés en cualquier otro caso.

## Estructura

```text
src/
├── components/       Componentes compartidos y tarjetas
├── data/             Catálogo de juegos y contenido profesional
├── i18n/             Traducciones y selección de idioma
├── pages/            Home y políticas de privacidad
├── sections/         Secciones de la página principal
└── assets/           Imágenes y recursos visuales
```

## Agregar un proyecto destacado

1. Crear su carpeta en `src/assets/projects/`.
2. Importar portada y capturas en `src/data/games.js`.
3. Agregar el juego al catálogo con contenido `player` y `professional` en español e inglés.
4. Definir enlaces y tecnologías.
5. Ejecutar `npm run lint` y `npm run build`.

## Rutas de producto

- `/`: portfolio profesional.
- `/portfolio/:gameId`: presentación técnica de un juego.
- `/games`: catálogo para jugadores.
- `/games/:gameId`: presentación del juego para jugadores.
- `/games/:gameId/support`: soporte específico.
- `/games/:gameId/privacy-policy`: alias futuro de la política.

Las URLs originales de las políticas se conservan porque pueden estar registradas en tiendas o builds existentes. No deben eliminarse al agregar los aliases nuevos.

## Despliegue

La regla de Vercel dirige las rutas de la SPA a `index.html`. Antes de publicar, verificar lint y build.
