const inquirer = require('inquirer');
const fs = require('fs');
//variables to connect modules to application
const util = require('util');
const generateHTML = require('.util')
const questions = require('lib/questions.js').questions;






class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    }
}

class Engeneer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        //link to GitHub profile page
    }
    getRole(){
        return 'Engeneer';
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){

    }
    getRole(){
        return 'Intern';
    }
}