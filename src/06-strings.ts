(() => {
  let name: string = 'Flumber';
  name = 'Fiza';
  console.log('🚀 ~ productTitle:', name);

  let description = "Product description."
  console.log('🚀 ~ productDescription:', description);

  let price = 132;
  let inStock = true;

  const summary = `
  title: ${name}
  description: ${description}
  price: ${price}
  in stock: ${inStock}
  `
  console.log('🚀 ~ summary:', summary);
})();
