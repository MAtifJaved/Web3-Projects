#! /usr/bin/env node
console.clear();
import inquirer from 'inquirer';
// import { title } from './Title/title.js';
import {welcome} from './Welcome/welcome.js';

// console.log("Hello Typescript");
//Welcome The user
//ask for numbers and operation as many as needed  
//check if numbers are valid
//Compute answer and show the results
//Try Again?

// NPM Installation

//npm i inquirer
//npm i -D @types/inquirer


welcome("welcome to the CLI Based Caculator");
// async function welcome(msg: string) {
//     console.log(msg);
// }


let checkConfirm = true;
function validateNumber(input: any): string | Boolean {
    if (isNaN(input)) {
        // console.log("This is invalid Input",input);
        return "Please Enter a valid number";
    }
    else {
        // console.log("This is valid Input",input);
        return true;
    }
}


type answers = {
    firstNumber: string,
    secondNumber: string,
    operation: "+" | "-" | "*" | "÷" | "%" | "^"
}

async function getInput() {
    const answers: answers = await inquirer.prompt([
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
    ])

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

do {
    await getInput();
    if (!checkConfirm) {
        console.log("Allah Hafiz");
    }
} while (checkConfirm)
