import type { Gift } from '../types'

/**
 * Regalos para ambos (Fam. Pérez Retamoza).
 *
 * Para agregar uno nuevo, copia un bloque y ajusta los campos.
 * Las imágenes van en /public/images y se referencian como "/images/archivo.jpg".
 */
export const gifts: Gift[] = [
  {
    id: 'duvet-strandmolke-ikea',
    title: 'Duvet ligeramente cálido Queen Size',
    description:
      '**Duvet ligeramente cálido** de IKEA (modelo STRANDMOLKE), **Queen Size**.',
    image: '/images/duvet-strandmolke-ikea.jpg',
    storeUrl:
      'https://www.ikea.com/mx/es/p/strandmolke-duvet-ligeramente-calido-00634511/',
    category: 'Hogar',
  },
  {
    id: 'mini-freidora-aire-ninja',
    title: 'Mini freidora de aire Ninja',
    description: '**Mini freidora de aire Ninja** de 4 litros, color negra.',
    image: '/images/freidora-ninja.jpg',
    storeUrl:
      'https://www.walmart.com.mx/ip/freidora-de-aire-ninja-canasta-4-litros-color-negra/00062235655457',
    category: 'Cocina',
  },
]
