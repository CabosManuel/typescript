(()=>{
  let userId: string | number;
  userId = 123;
  userId = '123';

  function print(msg: string | number) {
    // Dentro de este if, las sugerencias del IDE solo son de string
    if (typeof msg === 'string') {
      console.log('string:', msg);
    } else { // Dentro de este else, sugerencias de number
      console.log('number:', msg.toFixed(2));
    }
  }

  print('Manuel');
  print(123);
})();
