import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync.js";
export class JsonTodoCollection extends TodoCollection {
    userName;
    database;
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb.default(new FileSync.default("Todos.json"));
        if (this.database.has('tasks').value()) {
            let dbItems = this.database.get('tasks').value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set('tasks', todoItems).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
