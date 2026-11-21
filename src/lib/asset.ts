/**
 * Resuelve la ruta de un archivo de /public respetando el `base` de Vite.
 *
 * En desarrollo (base "/") devuelve "/images/foto.jpg"; en GitHub Pages
 * (base "/christmas-wishlist/") devuelve "/christmas-wishlist/images/foto.jpg".
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
