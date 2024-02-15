import { createUniqueId } from "./createUID";

export default Project;

class Project {
    constructor(title) {
        this._title = title;
        this._todoList = [];
        this._id = createUniqueId();
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    } 

    get id() {
        return this._id;
    }

    get todo() {
        return this._todoList;
    }

    addTodo(todo) {
        this._todoList.push(todo)
    }
}