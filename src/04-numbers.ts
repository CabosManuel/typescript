(() => {
  let productPrice = 100;
  productPrice = '12';
  console.log("🚀 ~ productPrice:", productPrice)

  // Add distinct type
  let customerAge: number = 24;
  customerAge = customerAge + '1';
  console.log("🚀 ~ customerAge:", customerAge)

  // Not assigned value
  let productInStock: number;
  console.log("🚀 ~ productInStock:", productInStock); // undefined
  if (productInStock > 0) {
    console.log('Exist stock');
  }

  let discount = parseInt('a123'); // number
  console.log("🚀 ~ discount:", discount); // NaN
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  // Hex and Binary are number
  let hex = 0xfff; // number
  console.log("🚀 ~ hex:", hex); // 4095
  let bin = 0b1010; // number
  console.log("🚀 ~ bin:", bin); // 10

  let numberObject: Number = 10; // No recomendado
  console.log("🚀 ~ numberObject:", numberObject); // 10
})();
