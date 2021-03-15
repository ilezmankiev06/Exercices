let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};


let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};


let developer = {
  ...student,
  ...knowledge,
};

let bug = "bug";
let code = "code";

let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];


// code here
[bug, ...code] = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];
console.log(code);
module.exports = {
  developer,
  bug,
  code,
};
