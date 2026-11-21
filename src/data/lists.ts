import type { GiftList } from '../types'
import { gifts as diegoGifts } from './gifts'
import { gifts as emilyGifts } from './gifts-emily'
import { gifts as familyGifts } from './gifts-family'

/**
 * Aquí se definen las tabs del sitio.
 *
 * Cada lista apunta a su propio archivo de regalos:
 * - Diego:  src/data/gifts.ts
 * - Emily:  src/data/gifts-emily.ts
 * - Ambos:  src/data/gifts-family.ts
 *
 * Para cambiar el orden de las tabs, reordena este arreglo.
 */
export const lists: GiftList[] = [
  {
    id: 'diego',
    ownerName: 'Diego',
    title: 'Mi lista de regalos',
    subtitle: 'Navidad 2026',
    message: 'Estos son algunos regalos que me encantaría recibir. ¡Gracias!',
    theme: 'emerald',
    gifts: diegoGifts,
  },
  {
    id: 'emily',
    ownerName: 'Emily',
    title: 'Mi lista de regalos',
    subtitle: 'Navidad 2026',
    message: 'Estos son algunos regalos que me encantaría recibir. ¡Gracias!',
    theme: 'rose',
    gifts: emilyGifts,
  },
  {
    id: 'familia',
    ownerName: 'Fam. Pérez Retamoza',
    title: 'Nuestra lista de regalos',
    subtitle: 'Navidad 2026',
    message: 'Estos son algunos regalos que nos gustaría recibir en casa. ¡Gracias!',
    theme: 'blue',
    gifts: familyGifts,
  },
]
