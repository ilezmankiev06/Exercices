const faker = require("faker");

let identity = () => {
    
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber(),
    email: `${this.firstName}.${this.lastName}@fake.local`,
    avatar: faker.internet.avatar(),
  };
};
console.log(identity());
module.exports = identity;
