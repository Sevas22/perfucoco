export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  category: 'hombre' | 'mujer' | 'unisex'
  size: string
  description: string
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  featured?: boolean
  new?: boolean
  bestseller?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Invictus',
    brand: 'Paco Rabanne',
    price: 450000,
    originalPrice: 520000,
    image: '/images/invictus.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Una fragancia fresca y poderosa que combina notas marinas con un toque de ámbar gris.',
    notes: {
      top: ['Pomelo', 'Mandarina', 'Notas marinas'],
      middle: ['Laurel', 'Jazmín'],
      base: ['Ámbar gris', 'Guayaco', 'Musgo de roble']
    },
    featured: true,
    bestseller: true
  },
  {
    id: '2',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    price: 520000,
    image: '/images/lavie.jpg',
    category: 'mujer',
    size: '75ml',
    description: 'Un iris gourmand irresistible que celebra la belleza de la vida.',
    notes: {
      top: ['Grosella negra', 'Pera'],
      middle: ['Iris', 'Jazmín', 'Flor de naranjo'],
      base: ['Praline', 'Vainilla', 'Pachulí']
    },
    featured: true,
    new: true
  },
  {
    id: '3',
    name: 'Sauvage',
    brand: 'Dior',
    price: 580000,
    image: '/images/sauvage.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Salvaje y noble al mismo tiempo. Una composición radicalmente fresca.',
    notes: {
      top: ['Bergamota de Calabria', 'Pimienta'],
      middle: ['Pimienta de Sichuan', 'Lavanda', 'Geranio'],
      base: ['Ambroxan', 'Cedro', 'Labdanum']
    },
    featured: true,
    bestseller: true
  },
  {
    id: '4',
    name: 'Good Girl',
    brand: 'Carolina Herrera',
    price: 490000,
    image: '/images/goodgirl.jpg',
    category: 'mujer',
    size: '80ml',
    description: 'La dualidad de la mujer moderna expresada en una fragancia sensual y atrevida.',
    notes: {
      top: ['Almendra', 'Café'],
      middle: ['Tuberosa', 'Jazmín Sambac'],
      base: ['Cacao', 'Tonka', 'Sándalo']
    },
    featured: true
  },
  {
    id: '5',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 650000,
    image: '/images/bleu.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Una fragancia aromática-amaderada que revela la libertad del hombre.',
    notes: {
      top: ['Menta', 'Limón', 'Pomelo rosa'],
      middle: ['Nuez moscada', 'Jengibre', 'Jazmín'],
      base: ['Incienso', 'Cedro', 'Sándalo']
    },
    bestseller: true
  },
  {
    id: '6',
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    price: 510000,
    image: '/images/blackopium.jpg',
    category: 'mujer',
    size: '90ml',
    description: 'Una fragancia adictiva con un corazón de café negro para una feminidad rock.',
    notes: {
      top: ['Pera', 'Naranja', 'Rosa'],
      middle: ['Café', 'Jazmín', 'Almendra amarga'],
      base: ['Vainilla', 'Pachulí', 'Cedro']
    },
    new: true,
    bestseller: true
  },
  {
    id: '7',
    name: '1 Million',
    brand: 'Paco Rabanne',
    price: 420000,
    originalPrice: 480000,
    image: '/images/1million.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Un perfume cuero especiado con acentos frescos y amaderados.',
    notes: {
      top: ['Pomelo', 'Menta', 'Naranja sanguina'],
      middle: ['Rosa', 'Canela', 'Especias'],
      base: ['Cuero', 'Ámbar', 'Madera']
    }
  },
  {
    id: '8',
    name: 'Coco Mademoiselle',
    brand: 'Chanel',
    price: 680000,
    image: '/images/cocomademoiselle.jpg',
    category: 'mujer',
    size: '100ml',
    description: 'Un perfume oriental fresco, irresistible y sensual.',
    notes: {
      top: ['Naranja', 'Bergamota', 'Pomelo'],
      middle: ['Rosa', 'Jazmín', 'Lichi'],
      base: ['Pachulí', 'Vetiver', 'Almizcle blanco']
    },
    bestseller: true
  },
  {
    id: '9',
    name: 'Eros',
    brand: 'Versace',
    price: 380000,
    image: '/images/eros.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Una fragancia para un hombre fuerte y apasionado inspirada en la mitología griega.',
    notes: {
      top: ['Menta', 'Manzana verde', 'Limón'],
      middle: ['Tonka', 'Ámbar gris', 'Geranio'],
      base: ['Vainilla', 'Vetiver', 'Musgo de roble']
    }
  },
  {
    id: '10',
    name: 'J\'adore',
    brand: 'Dior',
    price: 620000,
    image: '/images/jadore.jpg',
    category: 'mujer',
    size: '100ml',
    description: 'Un bouquet floral que celebra la feminidad absoluta.',
    notes: {
      top: ['Pera', 'Melón', 'Magnolia'],
      middle: ['Rosa', 'Violeta', 'Orquídea'],
      base: ['Almizcle', 'Vainilla', 'Mora']
    },
    featured: true
  },
  {
    id: '11',
    name: 'Acqua di Gio',
    brand: 'Giorgio Armani',
    price: 450000,
    image: '/images/acqua.jpg',
    category: 'hombre',
    size: '100ml',
    description: 'Una fragancia fresca y acuática que captura la esencia del Mediterráneo.',
    notes: {
      top: ['Bergamota', 'Neroli', 'Mandarina verde'],
      middle: ['Jazmín', 'Calone', 'Durazno'],
      base: ['Cedro', 'Almizcle', 'Ámbar']
    },
    bestseller: true
  },
  {
    id: '12',
    name: 'Oud Wood',
    brand: 'Tom Ford',
    price: 850000,
    image: '/images/oudwood.jpg',
    category: 'unisex',
    size: '50ml',
    description: 'Una mezcla exótica de maderas raras que crea una fragancia sofisticada.',
    notes: {
      top: ['Palo de rosa', 'Cardamomo'],
      middle: ['Oud', 'Sándalo', 'Vetiver'],
      base: ['Tonka', 'Ámbar']
    },
    new: true
  }
]

export const categories = [
  { id: 'todos', name: 'Todos', icon: 'Sparkles' },
  { id: 'hombre', name: 'Hombre', icon: 'User' },
  { id: 'mujer', name: 'Mujer', icon: 'Heart' },
  { id: 'unisex', name: 'Unisex', icon: 'Users' }
]

export const brands = [
  'Chanel',
  'Dior',
  'Paco Rabanne',
  'Carolina Herrera',
  'Lancôme',
  'Yves Saint Laurent',
  'Versace',
  'Giorgio Armani',
  'Tom Ford'
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
