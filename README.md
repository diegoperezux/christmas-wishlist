# 🎄 Mi lista de regalos

Sitio web estático para compartir las listas de regalos de Navidad con familia y amigos.
Tiene tres tabs: **Diego**, **Emily** y **Fam. Pérez Retamoza** (regalos para ambos).
Hecho con **React + Vite + TypeScript + Tailwind CSS**.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (probado con Node 24)
- npm

## Empezar en local

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Cómo editar tu lista

Todo el contenido vive en la carpeta `src/data`:

| Archivo | Qué contiene |
| --- | --- |
| `src/data/lists.ts` | Las tabs del sitio (nombre, título, subtítulo y mensaje) y qué regalos usa cada una. |
| `src/data/gifts.ts` | Los regalos de la tab **Diego**. |
| `src/data/gifts-emily.ts` | Los regalos de la tab **Emily**. |
| `src/data/gifts-family.ts` | Los regalos de la tab **Fam. Pérez Retamoza** (para ambos). |

Para agregar una tab nueva, agrega un objeto en `lists.ts` y crea su archivo de
regalos (o reutiliza uno existente). Para cambiar el orden de las tabs, reordena
el arreglo `lists`.

Para agregar un regalo, copia un bloque y ajusta los campos:

```ts
{
  id: 'auriculares',            // único, sin espacios
  title: 'Auriculares con cancelación de ruido',
  description: 'Para trabajar concentrado.',   // opcional
  image: '/images/auriculares.jpg',            // opcional (una sola foto)
  images: ['/images/a.jpg', '/images/b.jpg'],  // opcional (varias fotos, galería)
  price: 3500,                                 // opcional
  currency: 'MXN',                             // opcional (por defecto MXN)
  storeUrl: 'https://...',                     // opcional
  priority: 'alta',                            // 'alta' | 'media' | 'baja' (opcional)
  category: 'Tecnología',                      // opcional
}
```

### Imágenes

Guarda tus fotos en `public/images/` y referéncialas como `/images/archivo.jpg`.

- **Una sola foto:** usa `image: '/images/archivo.jpg'`.
- **Varias fotos del mismo regalo:** usa `images: ['/images/a.jpg', '/images/b.jpg']`
  y la tarjeta mostrará una galería con flechas y puntos. Si defines `images`,
  tiene prioridad sobre `image`.

Si un regalo no tiene imagen (o la imagen falla al cargar), se muestra un ícono
de regalo por defecto.

## Publicar en GitHub Pages

1. **Crea el repositorio en GitHub** y sube el código:

   ```bash
   git init
   git add .
   git commit -m "Lista de regalos de Navidad"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/christmas-wishlist.git
   git push -u origin main
   ```

2. **Activa GitHub Pages**: en el repo ve a **Settings → Pages** y en
   *Build and deployment → Source* elige **GitHub Actions**.

3. Listo. Cada `git push` a `main` publica los cambios automáticamente.
   Tu sitio quedará en:

   ```
   https://TU-USUARIO.github.io/christmas-wishlist/
   ```

> ⚠️ **Si tu repositorio se llama distinto** a `christmas-wishlist`, cambia el
> `base` en `vite.config.ts` por `/<nombre-de-tu-repo>/`.

## Scripts disponibles

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en vivo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npm run lint` | Revisa el código con oxlint. |

## Personalización visual

- **Colores**: se usan las paletas `emerald`, `stone`, `red` y `amber` de Tailwind.
  Cámbialas en los componentes de `src/components/`.
- **Tipografía**: la fuente de los títulos se define en `src/index.css`
  (variable `--font-display`).
- **Estructura**: `TabBar`, `Header`, `FilterBar`, `GiftGrid`, `GiftCard` y `Footer`.
# christmas-wishlist
