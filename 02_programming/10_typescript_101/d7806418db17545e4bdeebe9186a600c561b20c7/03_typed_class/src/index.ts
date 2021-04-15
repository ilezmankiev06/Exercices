class Bird {
  // Write your code here.
  age: number;
  constructor(age: number){
    this.age = age;
  }

  sing(){
    console.log("Cui cui");
  }
  fly(temps: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if (this.age > 1 && this.age <=3) {
      console.log(`The bird flew ${temps} meters in ${temps} seconds`);
    } else if (this.age > 3) {
      const ms2 = temps * 2;
      console.log(`The bird flew ${ms2} meters in ${temps} seconds`);
    }
    }
    }
// Leave the line below for tests to work properly.
export { Bird };
