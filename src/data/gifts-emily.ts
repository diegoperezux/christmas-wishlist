import type { Gift } from '../types'

/**
 * Lista de regalos de Emily.
 *
 * Para agregar uno nuevo, copia un bloque y ajusta los campos.
 * Las imágenes van en /public/images y se referencian como "/images/archivo.jpg".
 */
export const gifts: Gift[] = [
  {
    id: 'espumador-leche-keurig',
    title: 'Espumador de leche Keurig',
    description:
      '**Espumador de leche Keurig SimpleCafe** con jarra y batidor eléctrico. Ideal para preparar lattes y capuchinos en casa.',
    image: '/images/espumador-keurig.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B0CT43RWPQ',
    category: 'Cocina',
  },
  {
    id: 'perfume-squishmallow',
    title: 'Perfume Squishmallow (morado o rosa)',
    description:
      '**Perfume Squishmallow** en presentación morada o rosa. **Nada de olor a vainilla.**',
    image: '/images/perfume-squishmallow.jpg',
    storeUrl: 'https://www.ulta.com.mx/marcas/squishmallows-fragances',
    category: 'Perfumes',
  },
  {
    id: 'kit-le-mini-macaron',
    title: 'Le Mini Macaron (kit con lámpara y esmalte)',
    description:
      '**Le Mini Macaron**, kit de manicura en gel con lámpara LED y esmalte.',
    image: '/images/kit-le-mini-macaron.jpg',
    storeUrl:
      'https://www.liverpool.com.mx/tienda/pdp/set-de-manicure-manual-con-5-piezas/1147158137',
    category: 'Belleza',
  },
  {
    id: 'vinil-mcr-three-cheers',
    title: 'Vinil My Chemical Romance — Three Cheers for Sweet Revenge',
    description:
      '**Vinil de Three Cheers for Sweet Revenge** de My Chemical Romance, edición deluxe de 2 LP.',
    image: '/images/vinil-mcr-three-cheers.jpg',
    storeUrl:
      'https://www.mixup.com/three-cheers-for-sweet-revenge--explicit-content---dlx---2-lp-s-----lp----my-chemical-romance/p',
    category: 'Música',
  },
  {
    id: 'kit-cabello-elizavecca-cer-100',
    title: 'Kit de cabello Elizavecca CER-100',
    description:
      '**Kit de cabello Elizavecca CER-100** (3 pasos) para reparación y proteína capilar.',
    image: '/images/kit-elizavecca-cer-100.png',
    storeUrl:
      'https://www.mercadolibre.com.mx/elizavecca-cer-100-kit-3-rutina-proteina-reparacion-capilar/p/MLM2112179663',
    category: 'Belleza',
  },
  {
    id: 'pasadores-cabello-colores',
    title: 'Pasadores para cabello de colores',
    description: '**Pasadores para cabello de colores.**',
    image: '/images/pasadores-cabello-colores.jpg',
    category: 'Accesorios',
  },
  {
    id: 'nintendo-switch-2',
    title: 'Nintendo Switch 2',
    description: '**Nintendo Switch 2** edición estándar.',
    image: '/images/nintendo-switch-2.jpg',
    storeUrl:
      'https://www.costco.com.mx/Electronicos/Videojuegos/Nintendo-Switch/Nintendo-Switch-2-Standard-Edition/p/697937',
    category: 'Gaming',
  },
  {
    id: 'zelda-ocarina-of-time-switch-2',
    title: 'The Legend of Zelda: Ocarina of Time (Switch 2)',
    description: '**The Legend of Zelda: Ocarina of Time** para Nintendo Switch 2.',
    image: '/images/zelda-ocarina-of-time-switch-2.webp',
    storeUrl:
      'https://gameplanet.com/products/the-legend-of-zelda-ocarina-of-time-nintendo-switch-2',
    category: 'Gaming',
  },
]
