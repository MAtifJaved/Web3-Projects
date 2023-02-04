import inquirer from "inquirer";
// import chalk from 'chalk';


interface answertype {
    userId: string,
    userPin: number,
    accountType: string,
    transationType: string,
    amount: number
}

export default async function main() {
    const answers: answertype = await inquirer.prompt([
        {
            "name": "userId",
            "type": "input",
            "message": "Please Enter Your UserName",
        },
        {
            "name": "userPin",
            "type": "password",
            "message": "Please Enter Your Pin",
        },
        {
            "name": "accountType",
            "type": "list",
            "message": "Select Your Account Type",
            "choices": ["Current", "Savings"]
        },
        {
            "name": "transationType",
            "type": "list",
            "message": "Select Your Transation Type",
            "choices": ["Fast Cash", "WithDraw"],
            when(answers) {
                return answers.accountType;
            }
        },
        {
            "name": "amount",
            "type": "list",
            "message": "Select Your Amount",
            "choices": [500, 1000, 3000, 5000, 10000, 20000],
            when(answers) {
                return answers.transationType == "Fast Cash";
            }
        },
        {
            "name": "amount",
            "type": "number",
            "message": "Enter Your Amount",
            when(answers) {
                return answers.transationType == "WithDraw";
            }
        }
    ]);

    // console.log(answers.userPin);

    if (answers.userId && answers.userPin) {
        let balance = Math.floor(Math.random() * 100000);
        console.log("Your Account Balance is:", balance);
        const enteredAmount = answers.amount;
        if (balance >= enteredAmount) {
            console.log("Your Transaction is Successfull");
            console.log(`You Have Withdrawn ${enteredAmount}`);
            balance = balance - enteredAmount;
            console.log("Your Remaining Account Balance is:", balance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}

