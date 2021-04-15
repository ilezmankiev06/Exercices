const identityForm = (reader) => {
  // Code here
  function firstNameCallback(firstName) {
    console.log(`Hello, your first name is ${firstName}!`);

    function lastNameCallback(lastName) {
      console.log(`Your first name is ${lastName}!`);

      function yourAgeCallback(age) {
        console.log(age);
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      }
      reader.question("What is your age? ", yourAgeCallback);
    }
    reader.question("What is your last name? ", lastNameCallback);
  }
  reader.question("What is your first name? ", firstNameCallback);
};

// Leave line below for tests to work
module.exports = identityForm;
