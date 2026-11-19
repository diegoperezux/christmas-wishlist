import type { Gift } from '../types'

/**
 * Aquí vive tu lista de regalos.
 *
 * Para agregar uno nuevo, copia un bloque y ajusta los campos.
 * Los campos marcados como opcionales puedes borrarlos si no los necesitas.
 *
 * Las imágenes van en /public/images y se referencian como "/images/archivo.jpg".
 */
export const gifts: Gift[] = [
  {
    id: 'reloj-timex-expedition',
    title: 'Reloj Timex Expedition Scout 40',
    description:
      '**Reloj Timex Expedition Scout 40** con luz Indiglo y resistencia al agua 50 m. **Cualquier color está bien, siempre que sea este modelo.**',
    images: [
      '/images/reloj-timex-expedition-1.avif',
      '/images/reloj-timex-expedition-2.jpg',
      '/images/reloj-timex-expedition-3.webp',
      '/images/reloj-timex-expedition-4.webp',
    ],
    storeUrl: 'https://www.amazon.com.mx/dp/B0194LW5BM',
    category: 'Accesorios',
  },
  {
    id: 'reloj-casio-g-shock-ga-2100',
    title: 'Reloj Casio G-Shock GA-2100-1A1 ("CasiOak")',
    description:
      '**Reloj Casio G-Shock GA-2100-1A1** analógico-digital en color negro (*All Black*). Estructura Carbon Core Guard, resistencia a impactos y al agua de 200 m.',
    image: '/images/reloj-casio-g-shock-ga-2100-1a1.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B07WGJ1JNW',
    category: 'Accesorios',
  },

  {
    id: 'perfume-valentino',
    title: 'Perfume Valentino',
    description:
      '**Perfume Valentino** para hombre, en la botella negra con tachuelas. **Cualquier presentación de este modelo está bien.** En Guadalajara lo puedes buscar en tiendas departamentales como **Liverpool o Palacio de Hierro**, o en perfumerías.',
    image: '/images/perfume-valentino-1.webp',
    category: 'Perfumes',
  },
  {
    id: 'perfume-halloween-man-mystery',
    title: 'Perfume Halloween Man Mystery',
    description:
      '**Perfume Halloween Man Mystery**, en la botella negra. **Cualquier presentación de este modelo está bien.** En Guadalajara lo puedes buscar en tiendas departamentales como **Liverpool o Palacio de Hierro**, o en perfumerías.',
    image: '/images/perfume-halloween-man-mystery-1.webp',
    category: 'Perfumes',
  },
  {
    id: 'tarjetero-vulkit',
    title: 'Tarjetero billetera VULKIT',
    description:
      '**Tarjetero billetera VULKIT** con protección RFID, mecanismo pop-up para tarjetas, compartimento para efectivo/monedas y cierre magnético.',
    image: '/images/tarjetero-vulkit.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B0F7QNGVPG',
    category: 'Accesorios',
  },
  {
    id: 'gimbal-dji-osmo-mobile-7',
    title: 'DJI Estabilizador Osmo Mobile 7',
    description:
      '**DJI Estabilizador Osmo Mobile 7** para iPhone y Android. Gimbal 3 ejes con tripié integrado, ultraligero, agarre cómodo, ActiveTrack, ShotGuides y edición con un toque. 10 horas de uso.',
    image: '/images/61gQguBWa8L._AC_UF894,1000_QL80_.jpg',
    storeUrl: 'https://www.amazon.com.mx/DJI-Estabilizador-Ultraligero-ActiveTrack-ShotGuides/dp/B07FSS4R16/',
    category: 'Electrónica',
  },
  {
    id: 'organizador-tomtoc',
    title: 'tomtoc Organizador de Cables y Accesorios',
    description:
      '**tomtoc Electronics Organizer** (Tech Pouch). Estuche compacto y resistente al agua para organizar cables, cargadores, adaptadores, power bank y accesorios.',
    image: '/images/organizador-tomtoc.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B0DQ5VZLHM',
    category: 'Electrónica',
  },
  {
    id: 'bocina-sonos-era-100-sl',
    title: 'Bocina Sonos Era 100 SL',
    description:
      '**Bocina inteligente Sonos Era 100 SL** en color negro. Sonido estéreo de alta fidelidad con graves profundos, conectividad Wi-Fi, Bluetooth y entrada de audio.',
    image: '/images/bocina-sonos-era-100.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B0GJ78ZKF6',
    category: 'Electrónica',
  },
  {
    id: 'hervidor-cuello-cisne-kirogily',
    title: 'Hervidor eléctrico cuello de cisne KIROGILY (1 L)',
    description:
      '**Hervidor eléctrico de cuello de cisne KIROGILY** de 1 L y 800W en acero inoxidable. Control de flujo preciso, ideal para preparar café de especialidad (pour-over) o té.',
    image: '/images/hervidor-kirogily.jpg',
    storeUrl: 'https://www.amazon.com.mx/dp/B0FM87M9PJ',
    category: 'Cocina',
  },
]
