import {squareNumber} from "./squareNumber"

export function context(arrayOfNumbers: number[]): number[] {
  squareNumber(5);
  squareNumber(4);
  squareNumber(3);
  squareNumber(2);
  squareNumber(1);
  const squaredDigits = arrayOfNumbers.map(n => n * n)
  return squaredDigits;
}
