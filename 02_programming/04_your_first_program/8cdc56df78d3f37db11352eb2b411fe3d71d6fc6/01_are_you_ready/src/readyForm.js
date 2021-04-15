function callback(answer) {
  console.log(answer);
}

const readyForm = (reader) => {
  // Code here
  // console.log(reader);
  reader.question("Are you ready for today ??! ", (answer) => {
    console.log(`Your answer is:  ${answer}`);
    reader.close();
  });
  // reader.close();
};
// Leave line below for tests to work
module.exports = readyForm;
