import { IProduct } from "../model/interfaces";

export const productArr: IProduct[] = [
  // Electronics
  {
    id: '101',
    name: 'Laptop',
    category: 'Electronics',
    description: 'HP laptop with 16GB RAM and 512GB SSD',
    price: 55000,
    quantity: 10,
    brand: 'HP',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
  },
  {
    id: '102',
    name: 'Smartphone',
    category: 'Electronics',
    description: 'Samsung smartphone with 128GB storage',
    price: 25000,
    quantity: 15,
    brand: 'Samsung',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
  },
  {
    id: '103',
    name: 'Smart Watch',
    category: 'Electronics',
    description: 'Fitness tracking smartwatch',
    price: 4999,
    quantity: 8,
    brand: 'Noise',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
  },
  {
    id: '104',
    name: 'Digital Camera',
    category: 'Electronics',
    description: 'Professional digital camera',
    price: 45000,
    quantity: 5,
    brand: 'Canon',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
  },

  // Furniture
  {
    id: '105',
    name: 'Office Chair',
    category: 'Furniture',
    description: 'Ergonomic revolving office chair',
    price: 7500,
    quantity: 8,
    brand: 'Green Soul',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500'
  },
  {
    id: '106',
    name: 'Study Table',
    category: 'Furniture',
    description: 'Wooden study table with storage',
    price: 6500,
    quantity: 6,
    brand: 'Urban Ladder',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500'
  },
  {
    id: '107',
    name: 'Sofa',
    category: 'Furniture',
    description: 'Comfortable three seater sofa',
    price: 28000,
    quantity: 4,
    brand: 'IKEA',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
  },

  // Accessories
  {
    id: '108',
    name: 'Headphones',
    category: 'Accessories',
    description: 'Wireless Bluetooth headphones',
    price: 2999,
    quantity: 12,
    brand: 'Boat',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  },
  {
    id: '109',
    name: 'Keyboard',
    category: 'Accessories',
    description: 'Mechanical RGB gaming keyboard',
    price: 3500,
    quantity: 10,
    brand: 'Logitech',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
  },
  {
    id: '110',
    name: 'Sunglasses',
    category: 'Accessories',
    description: 'Stylish UV protection sunglasses',
    price: 1999,
    quantity: 20,
    brand: 'Ray-Ban',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500'
  },
  {
    id: '111',
    name: 'Backpack',
    category: 'Accessories',
    description: 'Water resistant travel backpack',
    price: 2499,
    quantity: 15,
    brand: 'Skybags',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
  },

  // Home Appliances
  {
    id: '112',
    name: 'Washing Machine',
    category: 'Home Appliances',
    description: '7KG fully automatic washing machine',
    price: 22000,
    quantity: 5,
    brand: 'LG',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500'
  },
  {
    id: '113',
    name: 'Refrigerator',
    category: 'Home Appliances',
    description: 'Double door frost free refrigerator',
    price: 32000,
    quantity: 7,
    brand: 'Samsung',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500'
  },
  {
    id: '114',
    name: 'Microwave Oven',
    category: 'Home Appliances',
    description: 'Convection microwave oven',
    price: 12000,
    quantity: 9,
    brand: 'IFB',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500'
  },
  {
    id: '115',
    name: 'Air Conditioner',
    category: 'Home Appliances',
    description: '1.5 Ton inverter split AC',
    price: 38000,
    quantity: 3,
    brand: 'Voltas',
    isAvailable: false,
    image: 'https://images.unsplash.com/photo-1631545806609-7c3d7e4c5a5e?w=500'
  }
];