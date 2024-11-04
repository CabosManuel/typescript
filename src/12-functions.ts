(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P0001', new Date(), 100, 'XL');
  console.log(product1);
  console.log('title:', product1.title);
  console.log('size:', product1.size);

  // Arrow function
  const optionalCreateProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = optionalCreateProductToJson('P0002', new Date(), 100);
  console.log(product2);
  console.log('title:', product2.title);
  console.log('size:', product2.size);
})();
