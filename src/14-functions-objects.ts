(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  // login('manuel@gmail.com', '123456');
  login({
      email: 'manuel@gmail.com',
      password: '123456',
    });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log(products);

})();
