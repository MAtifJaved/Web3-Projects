import inquirer from "inquirer";
import chalk from 'chalk';

const log = console.log

const generatedNumber: number = Math.floor(Math.random() * 10);

// log(chalk.bgCyan('The Computer Generated Number is'), generatedNumber);



function validateNumber(input: any){
    if (isNaN(input)) {
        log(chalk.italic.bgWhiteBright('Please Enter a valid number'));
    }
    else {
        return true;
    }
}

export default async function main() {
    let noOfTries = 5
    while (noOfTries > 0) {
        let userNumber = await inquirer.prompt([
        {
            "name": "userInput",    
            "type": "input",
            "message": "Please Enter Your Number",
            "validate": validateNumber,
        }
        
    ])

        console.log(userNumber.userInput);

    let userEnteredNumber: number = Number(userNumber.userInput);


    if (userEnteredNumber === generatedNumber) {
        log(chalk.bold.blue('Congratulations....!!You are Winner'));
        noOfTries = 0;
    }
    else {
        log(chalk.red('Please Try Again'));
        log(chalk.bold.blue(`You Have ${noOfTries - 1} Tries Left Back`));
        // log(`You Have ${noOfTries - 1} Tries Left Back`);
        if(userEnteredNumber < generatedNumber){
            log(chalk.bold.blue('You Should Choose Some Higher Number'));
        }
        else if(userEnteredNumber > generatedNumber){
            log(chalk.bold.blue('You Should Choose Some Lower Number'));
        }
    }
    noOfTries--;
}
}