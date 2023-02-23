#!/usr/bin/env node
`node --trace-warnings ...`;
// console.log("Hello World");
import { TodoItem } from "./todoItem.js";
import { JsonTodoCollection } from "./jsonTodoCollection.js";
import inquirer from "inquirer";
let showCompleted = true;
let todos = [new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];
let collection = new JsonTodoCollection("Atif", todos);
function displayTodoList() {
    console.log((`${collection.userName}'s Todo List `) + `${collection.getItemCounts().incomplete} Items to do`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add new Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        name: "add",
        type: "input",
        message: "Enter Task",
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers.add);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        name: "complete",
        type: "checkbox",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item => ({
            name: item.task, value: item.id, checked: item.complete
        }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        console.log(completedTasks);
        collection.getTodoItems(true).forEach((item) => {
            collection.markComplete(item.id, (completedTasks.find(id => id === item.id) !== undefined));
            promptUser();
        });
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        name: "command",
        type: "list",
        message: "Choose Operation",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if ((collection.getItemCounts().incomplete) > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
            case Commands.Quit:
                showCompleted = false;
                break;
            default:
                promptUser();
                break;
        }
    });
}
promptUser();
