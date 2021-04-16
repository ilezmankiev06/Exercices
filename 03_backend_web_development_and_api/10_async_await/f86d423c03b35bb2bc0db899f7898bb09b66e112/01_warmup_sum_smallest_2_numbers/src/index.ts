// function sumTwoSmallestNumber(numbers: number[]): number[] {  
//   const order = numbers.sort(function( a, b ) { 
//     return a - b 
//   });
//   return order
// }
// console.log(sumTwoSmallestNumber([19, 5, 42, 2, 77]))

export function sumTwoSmallestNumbers(numbers: number[]): number {  
  if (numbers.length < 4) {
    throw "There are less than 4 numbers!";
  }
  const positiveNumber = (currentValue) => {
    return currentValue > 0
  }
  if (!numbers.every(positiveNumber)) {
    throw "There are non-positive numbers";
  }
    const order = numbers.sort(function( a, b ) { 
      return a - b 
    });
    let result = 0;
    for (let i = 0; i < order.length; i++) {
      if( i === 0 ){
        result += order[0];
      }
      if ( i === 1 ){
        result += order[1];
      }
    }
    return result;
  }
// console.log(sumTwoSmallestNumbers([-19, 5, 42, 2, 77]));

// export function sumTwoSmallestNumbers(numbers: number[]): number {  
//   if (numbers.length < 4) {
//     throw "There are less than 4 numbers!";
//   }
//     const order = numbers.sort(function( a, b ) { 
//       return a - b 
//     });
//     let result = 0;
//     for (let i = 0; i < order.length; i++) {
//       if( i === 0 ){
//         result += order[0];
//       }
//       if ( i === 1 ){
//         result += order[1];
//       }
//       if (numbers[i] < 0) {
//         throw "There are non-positive numbers!";
//       }
//     }
//     return result;
//   }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));