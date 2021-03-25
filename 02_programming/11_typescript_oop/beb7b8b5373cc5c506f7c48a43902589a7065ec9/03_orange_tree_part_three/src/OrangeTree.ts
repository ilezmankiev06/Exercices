import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
    protected _oranges: string[] = [];

    constructor(age: number) {
      super(age);
    }

    get age(): number {
      return this._age;
    }

    get height(): number {
      return this._height;
    } 

    get alive(): boolean {
      return this._alive;
    } 

    get oranges(): string[] {
      return this._oranges;
    } 

    ageOneYear(): void {
      this._age++;
      this._isAlive();
      this.growOranges();
      if (this._age <= 9) {
        this._height = this._age * 25;
      } else if (this._age >= 10 && this._age <= 20) {
        const _height3 = (this._age - 9) * 10;
        this._height = (9 * 25) + _height3;
      } else if (this._age > 20) {
        this._height = (9 * 25) + (11 * 10);
        }
    }

    _isAlive(): boolean {
      if (this._age < 50){
        this._alive=true;
        return true;
      } else if (this._age >= 50 && this._alive) {
        this._alive = (Math.random() > ((this._age - 49) / 50));
        return this._alive;
      } else if (this._age > 99){
        this._alive=false;
        return false;
      }
    }

    growOranges(): void {
        if (this._age > 4 && this._age <= 10) {
          this._oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
        } else if (this._age > 10 && this._age <= 20) {
            this._oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
        } else if (this._age > 20 && this._age <= 40) {
            this._oranges = ["🍊","🍊","🍊","🍊","🍊"];
        }
    }
    pickAnOrange(): void {
      this._oranges.pop();
    }
}
// Leave the line below for tests to work properly.
export { OrangeTree };


