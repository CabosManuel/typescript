(() => {
  const numbers = [1,2,4,5,6,7,1, '13']; // (string | number)[]
  const types = [1,2,3,'4',true]; // (string | number | boolean)[]

  // prices.push('123'); // Error
  // prices.push(true); // Error
  // prices.push({}); // Error
  numbers.push(123);

  let mixed: (string | number | boolean | object)[] = [false, 1];
  mixed.push('2');
  mixed.push({});

  let even = [2,4,6,8];
  even.map(item => item * 2);
})();
