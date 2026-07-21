<div align="center">

# Dotaciones Sariss

**Landing page corporativa para el diseño y confección de dotación empresarial en Colombia.**

Sitio web de una sola página (_one-page_) construido con Next.js 16, React 19 y Tailwind CSS v4, con SEO optimizado y catálogo visual de productos.

[Demo en producción](https://dotaciones-sariss.vercel.app) · [Instagram](https://www.instagram.com/sariss_confecciones) · [WhatsApp](https://wa.me/573164469747)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura y secciones](#arquitectura-y-secciones)
- [SEO](#seo)
- [Guía de personalización](#guía-de-personalización)
- [Despliegue](#despliegue)
- [Convenciones del proyecto](#convenciones-del-proyecto)
- [Licencia](#licencia)

---

## Descripción

**Dotaciones Sariss** es una empresa colombiana dedicada al diseño y confección de ropa para dotación empresarial: hoodies, chalecos, chaquetas, blusas, vestidos y cobijas corporativas personalizables.

Este repositorio contiene su sitio web institucional: una landing page de una sola página, con navegación por anclas, catálogo visual con carruseles de imágenes y enlaces directos a los canales de contacto (Instagram, WhatsApp Business y correo). El sitio está optimizado para buscadores (SEO) y redes sociales (Open Graph / Twitter Cards).

---

## Características

- **Diseño _one-page_** con navegación suave por anclas (`#inicio`, `#sobre-nosotros`, `#productos`, `#servicios`, `#contactenos`).
- **Catálogo de productos** con seis categorías y carrusel horizontal de imágenes por producto, con scroll-snap y controles de navegación accesibles.
- **Optimización de imágenes** mediante `next/image` (carga diferida, `priority` en las críticas y tamaños responsivos).
- **SEO completo**: metadatos dinámicos, `sitemap.xml`, `robots.txt` e imagen Open Graph generada en tiempo de compilación.
- **Tipografías optimizadas** con `next/font` (Cinzel para títulos, Space Grotesk para cuerpo), sin peticiones externas.
- **Sistema de diseño con variables CSS** (paleta, superficies y líneas) centralizado en `globals.css`.
- **Accesibilidad**: etiquetas `aria-label`, textos alternativos e íconos con `sr-only`.
- **Fuente única de configuración** (`config.ts`) para la URL pública y el nombre del sitio.
- **Totalmente responsivo** (móvil, tablet y escritorio).

---

## Stack tecnológico

| Categoría | Tecnología |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Librería UI | [React 19](https://react.dev/) |
| Lenguaje | [TypeScript 5](https://www.typescriptlang.org/) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/postcss`) |
| Tipografías | `next/font` — Cinzel y Space Grotesk |
| Imágenes | `next/image` |
| Linting | ESLint 9 + `eslint-config-next` |
| Hosting recomendado | [Vercel](https://vercel.com/) |

---

## Requisitos previos

- **Node.js 18.18 o superior** (recomendado LTS actual).
- Un gestor de paquetes: **npm**, **yarn**, **pnpm** o **bun**.

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd dotaciones-sariss

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Los cambios se recargan automáticamente.

---

## Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:3000`. |
| `npm run build` | Genera la versión de producción optimizada. |
| `npm run start` | Sirve la build de producción localmente. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

---

## Estructura del proyecto

```
dotaciones-sariss/
├── public/                       # Recursos públicos estáticos
├── src/
│   └── app/                      # App Router de Next.js
│       ├── components/
│       │   └── ProductCarousel.tsx   # Carrusel de imágenes por producto (Client Component)
│       ├── chalecos/             # Imágenes de producto: chalecos
│       ├── chaquetas/            # Imágenes de producto: chaquetas
│       ├── cobijas/              # Imágenes de producto: cobijas
│       ├── hoodies/              # Imágenes de producto: hoodies
│       ├── vestidos/             # Imágenes de producto: vestidos
│       ├── config.ts             # Configuración central (siteUrl, siteName)
│       ├── layout.tsx            # Layout raíz: fuentes y metadatos SEO
│       ├── page.tsx              # Página principal y datos locales del contenido
│       ├── globals.css           # Variables de diseño, tipografía y utilidades
│       ├── opengraph-image.tsx   # Imagen Open Graph (1200×630) generada dinámicamente
│       ├── sitemap.ts            # Generación de sitemap.xml
│       ├── robots.ts             # Generación de robots.txt
│       ├── favicon.ico           # Favicon del sitio
│       ├── LogoSariss.png        # Logotipo
│       ├── Imagen3.png           # Imagen del hero
│       ├── Imagen4.png           # Imagen institucional
│       └── icono*.png            # Íconos de contacto (Gmail, Instagram, WhatsApp)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json                 # Alias de importación: @/* → ./src/*
└── package.json
```

---

## Arquitectura y secciones

El contenido vive principalmente en **`src/app/page.tsx`**, donde los datos se definen como estructuras locales dentro del componente:

- **`products`** — arreglo de categorías del catálogo (`hoodies`, `chalecos`, `chaquetas`, `blusas`, `vestidos`, `cobijas`), cada una con `title`, `description` y `gallery` (imágenes importadas estáticamente).
- **`aboutColumns`** — misión, visión y valores de la empresa.
- **`navLinks`** — enlaces de navegación por anclas.
- Enlaces de contacto: `whatsappLink`, `instagramLink` y `emailLink`.

La página se compone de las siguientes secciones:

| Sección | ID de ancla | Contenido |
| --- | --- | --- |
| Encabezado | — | Logo, navegación y botón de WhatsApp. |
| Inicio | `#inicio` | Hero con mensaje principal e imagen destacada. |
| Sobre nosotros | `#sobre-nosotros` | Misión, visión, valores e imagen institucional. |
| Productos | `#productos` | Grid de categorías con carrusel de imágenes. |
| Servicios | `#servicios` | Descripción de asesoría integral. |
| Contáctenos | `#contactenos` | Enlaces a Instagram, WhatsApp, correo y horario. |
| Pie de página | — | Enlaces internos y datos de contacto. |

El componente **`ProductCarousel.tsx`** es un _Client Component_ que renderiza un carrusel horizontal con scroll-snap y botones de avance/retroceso. Cuando una categoría no tiene imágenes (`gallery: []`), muestra un marcador de "Imágenes próximamente".

---

## SEO

El proyecto integra SEO de forma nativa con las convenciones de metadatos del App Router:

- **`layout.tsx`** — objeto `metadata` con título dinámico (`template`), descripción, keywords, `openGraph`, `twitter` y directivas de `robots`. Usa `metadataBase` derivado de `config.ts`.
- **`opengraph-image.tsx`** — genera la imagen social (1200×630) en tiempo de compilación con `next/og`.
- **`sitemap.ts`** — genera `sitemap.xml`.
- **`robots.ts`** — genera `robots.txt` con referencia al sitemap.
- El idioma del documento está fijado en `es` y la localización Open Graph en `es_CO`.

> **Nota:** la URL pública se define **solo** en `src/app/config.ts`. Al cambiar `siteUrl`, todo el SEO (metadatos, sitemap y robots) se actualiza automáticamente.

---

## Guía de personalización

| Qué cambiar | Dónde |
| --- | --- |
| Nombres, descripciones y galerías de productos | `products` en `src/app/page.tsx` |
| Misión, visión y valores | `aboutColumns` en `src/app/page.tsx` |
| Enlaces de WhatsApp, Instagram y correo | `whatsappLink`, `instagramLink`, `emailLink` en `page.tsx` |
| URL pública y nombre del sitio | `src/app/config.ts` |
| Metadatos y keywords de SEO | `src/app/layout.tsx` |
| Paleta de colores y tipografía | Variables (`--bg`, `--surface`, `--accent`, etc.) en `src/app/globals.css` |
| Logo, hero e imágenes institucionales | `LogoSariss.png`, `Imagen3.png`, `Imagen4.png` en `src/app/` |
| Imágenes de catálogo | Carpetas `hoodies/`, `chalecos/`, `chaquetas/`, `vestidos/`, `cobijas/` |

**Para añadir imágenes a un producto:** coloca los archivos en la carpeta de la categoría, impórtalos en `page.tsx` y agrégalos al arreglo `gallery` correspondiente.

---

## Despliegue

El proyecto está optimizado para desplegarse en **[Vercel](https://vercel.com/)** (plataforma creadora de Next.js):

1. Conecta el repositorio a Vercel.
2. Vercel detecta automáticamente Next.js — no requiere configuración adicional.
3. Cada push a la rama principal genera un despliegue de producción; las ramas y PRs generan _preview deployments_.

Antes de publicar, actualiza `siteUrl` en `src/app/config.ts` con el dominio definitivo para que el SEO apunte a la URL correcta.

**Build de producción local:**

```bash
npm run build
npm run start
```

---

## Convenciones del proyecto

- **Idioma:** contenido y comentarios en español.
- **Alias de importación:** `@/*` mapea a `./src/*` (ver `tsconfig.json`).
- **TypeScript estricto** (`strict: true`).
- **Documentación de Next.js:** este proyecto usa una versión de Next.js con posibles cambios importantes respecto a versiones anteriores. Consulta las guías en `node_modules/next/dist/docs/` antes de escribir código nuevo y presta atención a los avisos de deprecación (ver `AGENTS.md`).

---

## Licencia

Proyecto privado. Todos los derechos reservados © Dotaciones Sariss.