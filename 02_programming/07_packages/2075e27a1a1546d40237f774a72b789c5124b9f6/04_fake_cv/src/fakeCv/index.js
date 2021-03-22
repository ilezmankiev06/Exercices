const identity = require("./identity");
const motivation = require("./motivation");
const currentJob = require("./currentJob");


// let ident = {
//   identity,
// };
// let motiv = {
//   motivation,
// };
// let job = {
//   currentJob,
// };

let fakeCv = () => {
  let ident = identity();
  let motiv = motivation();
  let job = currentJob();
  function faker() {
    let cv = {
        ident,
        motiv,
        job,
      };
      return cv;
    }; 
};

module.exports = fakeCv;
