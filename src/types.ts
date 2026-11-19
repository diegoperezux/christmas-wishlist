export type Priority = 'alta' | 'media' | 'baja'

export interface Gift {
  /** Identificador único. Corto y sin espacios, ej: "auriculares". */
  id: string
  /** Nombre del regalo. */
  title: string
  /** Descripción breve (opcional). */
  description?: string
  /** Ruta a una imagen dentro de /public/images, ej: "/images/auriculares.jpg". */
  image?: string
  /** Varias fotos del mismo regalo. Si lo usas, tiene prioridad sobre `image`. */
  images?: string[]
  /** Precio aproximado (opcional). */
  price?: number
  /** Moneda del precio. Por defecto "MXN". */
  currency?: string
  /** Link a la tienda donde se puede comprar (opcional). */
  storeUrl?: string
  /** Qué tanto lo quieres: "alta", "media" o "baja" (opcional). */
  priority?: Priority
  /** Categoría para agrupar y filtrar, ej: "Tecnología" (opcional). */
  category?: string
}

export interface WishlistConfig {
  /** Tu nombre, aparece en el encabezado. */
  ownerName: string
  /** Título principal de la página. */
  title: string
  /** Texto pequeño arriba del título, ej: "Navidad 2026". */
  subtitle: string
  /** Mensaje de bienvenida para quien visita la lista. */
  message: string
}
