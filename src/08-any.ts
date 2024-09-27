(()=>{
  // Cualquier tipo de dato (no se recomienda usar)
  let dynamicVariable: any;

  dynamicVariable = 'string';
  dynamicVariable = 100;
  dynamicVariable = null;
  dynamicVariable = {};

  // Casting to String and Number
  dynamicVariable = 'MANUEL';
  const castString = (dynamicVariable as string).toLowerCase();
  console.log('🚀 ~ castString:', castString);

  dynamicVariable = 123;
  const castNumber = (<number> dynamicVariable).toFixed(2);
  console.log('🚀 ~ castNumber:', castNumber);
})();
