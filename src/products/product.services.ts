import { Product } from './product.model'

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
}

export const calculateStock = (): number => {
  let total = 0;
  products.forEach((product) => {
    total += product.stock;
  });
  return total;
}
