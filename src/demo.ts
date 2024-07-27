(async ()=> {
  const myCart = [];
  let products = [];
  const limit = 2;

  /**
   * Obtener todos los productos de la API
   */
  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products = products.concat(data);
  }

  /**
   * Obtener la cantidad total de productos en el carrito
   * @returns {number} Retorna el total
   */
  function getTotal() {
    let total = 0;
    // Recorrer los productos del carrito
    for (let i = 0; i < myCart.length; i++) {
      total++;
    }
    return total;
  }

  /**
   * Agregar un producto al carrito
   * @param {number} index Indice del producto
   */
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  // Agregar el producto 1 y 2 al carrito
  addProduct(1);
  addProduct(2);

  const total = getTotal();
  const person = {
    name: 'Manuel',
    lastName: 'Cabos'
  }

  const rta = `${person.name} ${person.lastName}: ${total}`;
  console.log('¿Cuántos productos tengo en el carrito?');
  console.log(rta);
})();
