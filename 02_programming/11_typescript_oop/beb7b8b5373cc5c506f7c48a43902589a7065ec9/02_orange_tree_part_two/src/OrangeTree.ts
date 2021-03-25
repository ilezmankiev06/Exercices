import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
    oranges: string[] = [];

    constructor(age: number) {
      super(age);
    }
    ageOneYear(): void {
        this.age++;
        this.isAlive();
        this.growOranges();
        if (this.age <= 9) {
            this.height = this.age * 25;
          } else if (this.age >= 10 && this.age <= 20) {
            const height3 = (this.age - 9) * 10;
            this.height = (9 * 25) + height3;
          } else if (this.age > 20){
              this.height = (9 * 25) + (11 * 10);
          }
    }

    isAlive(): boolean {
      if (this.age < 50){
        this.alive=true;
        return true;
      } else if (this.age >= 50 && this.alive) {
        this.alive = (Math.random() > ((this.age - 49) / 50));
        return this.alive;
      } else if (this.age > 99){
        this.alive=false;
        return false;
      }
    }

    growOranges(): void {
        if (this.age > 4 && this.age <= 10) {
            this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
        } else if (this.age > 10 && this.age <= 20) {
            this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
        } else if (this.age > 20 && this.age <= 40) {
            this.oranges = ["🍊","🍊","🍊","🍊","🍊"];
        }
    }
    pickAnOrange(): void {
      this.oranges.pop();
    }
}
// Leave the line below for tests to work properly.
export { OrangeTree };

