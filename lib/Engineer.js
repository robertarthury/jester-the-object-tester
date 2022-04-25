//call employee
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github; 
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer"; 
  }
}

//make sure to export this class to use it
module.exports = Engineer;
