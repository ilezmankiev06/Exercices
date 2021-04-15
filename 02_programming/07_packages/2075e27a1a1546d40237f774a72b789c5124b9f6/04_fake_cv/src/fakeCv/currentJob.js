const faker = require("faker");

let currentJob = () => {
  return {
    companyName: faker.company.companyName(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
  };
};

module.exports = currentJob;