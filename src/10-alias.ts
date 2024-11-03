(()=>{
  type UserID = string | number;
  let userId: UserID;

  // Literal types
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'XS';

  function print(userId: UserID, shirtSize: 'S' | 'M' | 'L' | 'XL') {
    if (typeof userId === 'string') {
      console.log('string:', userId.toLowerCase());
    }
  }

  print(1000, 'S');
  print(1000, 'X');

})();
