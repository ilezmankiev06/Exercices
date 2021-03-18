const developer = {
  isCoding: "status",
  daysCoding: null,
  projectStatus: "projet",
  codeLinesProduced: null,
  linesNeeded: null,
  maxDelay: null,
  initiateProject: function () {
    
  },
  startProject: function (min, max) {
    this.linesNeeded = min;
    this.maxDelay = max;
    return this;
  },
  codeForOneDay: function () {
    this.daysCoding * 2;
    
  },

};
console.log(developer.startProject(90, 400));

module.exports = developer;
