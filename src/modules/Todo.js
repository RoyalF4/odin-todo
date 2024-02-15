export default Todo;

class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._completed = false;
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

    toggleCompleted() {
        this._completed = !this._completed;
    }

    isCompleted() {
        return this._completed;
    }
}