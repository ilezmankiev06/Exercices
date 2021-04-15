const faker = require("faker");

let motivation = () => {
  return {
    catchPhrase: faker.company.catchPhrase(),
    description: faker.lorem.words(),
  };
};

module.exports = motivation;
