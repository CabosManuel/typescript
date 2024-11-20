(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // Type object
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'P0001',
    createdAt: new Date(),
    stock: 100
  });
  addProduct({
    title: 'P0002',
    createdAt: new Date(),
    stock: 100,
    size: 'XL'
  });

  // Si no tiene la estructura de Product da error
  products.push({
    title: 'P0003',
    createdAt: new Date(),
    stock: 101,
    size: 'S'
  })

  console.log(products);
})();
