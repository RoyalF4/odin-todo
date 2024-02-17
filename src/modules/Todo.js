import { createUniqueId } from "./createUID";

class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._completed = false;
        this._id = createUniqueId();
    }

    get title() {
        return this._title;
    }

    get description() {
        return this.description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get completed() {
        return this._completed;
    }

    get id() {
        return this._id;
    }

    set title(title) {
        this._title = title;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    set priority(priority) {
        this._priority = priority;
    }

    toggleCompleted() {
        this._completed = !this._completed;
    }

    isCompleted() {
        return this._completed;
    }
}

export default Todo;