# Dotaciones Sariss

Landing page corporativa para Dotaciones Sariss enfocada en dotacion empresarial. Sitio de una sola pagina con secciones de marca, productos, servicios y contacto.

## Contenido actual

- Inicio con hero, mensaje principal e imagen.
- Sobre nosotros con mision, vision y valores.
- Productos con cards y carrusel horizontal (placeholders).
- Servicios con texto y espacio reservado para imagen.
- Contactenos con enlaces a Instagram, WhatsApp y correo, mas horario.
- Footer con enlaces internos y contacto.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- next/font (Space Grotesk y Cinzel)

## Requisitos

- Node.js + npm (o yarn/pnpm/bun)

## Instalacion y desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura relevante

- src/app/page.tsx: contenido principal y data local.
- src/app/components/ProductCarousel.tsx: carrusel de productos.
- src/app/layout.tsx: fuentes y metadata.
- src/app/globals.css: variables de color, tipografia y utilidades.
- public/: archivos publicos (si se agregan).

## Personalizacion rapida

- Edita `products` en page.tsx para nombres, descripciones y galerias.
- Edita `aboutColumns` para mision, vision y valores.
- Actualiza `whatsappLink`, `instagramLink` y `emailLink`.
- Reemplaza imagenes en src/app/ (LogoSariss.png, Imagen3.png, Imagen4.png y los iconos).
- Ajusta la paleta en globals.css (variables `--bg`, `--surface`, `--accent`, etc).

## Deployment

- `npm run build` y `npm run start` para produccion local.
- Recomendado: Vercel.
