#! /usr/bin/env node
// console.log("Hello Typescript");
console.clear();
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
//Welcome The user
//ask for numbers and operation as many as needed  
//check if numbers are valid
//Compute answer and show the results
//Try Again?
// NPM Installation
//npm i inquirer
//npm i -D @types/inquirer
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const welcomeTitle = chalkAnimation.rainbow('Welcome to the CLI Based Calculator\n');
    await sleep();
    welcomeTitle.stop();
}
await welcome();
let checkConfirm = true;
function welcomeMsg(msg) {
    console.log(msg);
}
function validateNumber(input) {
    if (isNaN(input)) {
        // console.log("This is invalid Input",input);
        return "Please Enter a valid number";
    }
    else {
        // console.log("This is valid Input",input);
        return true;
    }
}
async function getInput() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstNumber",
            message: "Enter First number",
            validate: validateNumber
        },
        {
            type: "list",
            name: "operation",
            choices: ["+", "-", "*", "÷", "%", "^"],
            message: "Choose One Operation",
        },
        {
            type: "input",
            name: "secondNumber",
            message: "Enter Second number",
            validate: validateNumber
        }
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(`Results: ${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`Results: ${firstNumber - secondNumber}`);
            break;
        case "*":
            console.log(`Results: ${firstNumber * secondNumber}`);
            break;
        case "÷":
            console.log(`Results: ${firstNumber / secondNumber}`);
            break;
        case "%":
            console.log(`Results: ${firstNumber % secondNumber}`);
            break;
        case "^":
            console.log(`Results: ${Math.pow(firstNumber, secondNumber)}`);
            break;
        default:
            break;
    }
    const answer = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to Try Again"
        }
    ]);
    checkConfirm = answer.confirm;
}
welcomeMsg("Welcome to The Best Calculator");
do {
    await getInput();
    if (!checkConfirm) {
        console.log("Allah Hafiz");
    }
} while (checkConfirm);
