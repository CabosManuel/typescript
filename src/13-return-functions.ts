(()=>{
  const calcTotal = (prices: number[], ): string => {
    let total = 0;
    prices.forEach(item => {
      total += item;
    });
    return 'total: ' + total;
  }

  const res = calcTotal([1,2,3,4,5]);
  console.log(res);


  const printTotal = (prices: number[]): void => {
    const res = calcTotal(prices);
    console.log('🚀 ~ printTotal ~ res:', res);
  }

  printTotal([1,2,3,4,5]);
})();
