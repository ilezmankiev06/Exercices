// Paste your previous `Tree` class here.
abstract class Tree {
    protected _age: number;
    protected _height: number;
    protected _alive: boolean = true;
  
    constructor(age: number) {
      this._age = age;
      this._height = 0;
      if (this._age <= 9) {
        this._height = this._age * 25;
      } else if (this._age >= 10 && this._age <= 20) {
        const height3 = (this._age - 9) * 10;
        this._height = (9 * 25) + height3;
      } else if (this._age > 20){
        this._height = (9 * 25) + (11 * 10);
      }
    }
  
    protected abstract _isAlive(): boolean;
    abstract ageOneYear(): void;
  
    seed(): void {
      this._age = 0;
      this._height = 0;
      this._alive = true;
    }
  }
// Leave the line below for tests to work properly.
export { Tree };
