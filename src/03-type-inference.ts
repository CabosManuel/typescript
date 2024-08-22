// Type Inference

let productName = 'Product 1'; // Infers string type
let productPrice = 120; // Infers number type

productName = ''; // Then always string
// productName = 123; // Error, no string

productName.toUpperCase(); // IDE suggest string functions
productPrice.toFixed(); // IDE suggest number functions

const businessName = 'CabosStore'; // Infers 'CabosStore' type
