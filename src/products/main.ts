import { products, createProduct, calculateStock } from './product.services'

createProduct({
  name: 'P0004',
  createdAt: new Date(),
  stock: 10
});

console.log('🚀 ~ products:', products);
console.log('🚀 ~ calculateStock:', calculateStock());
