export default Todo;

class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._completed = false;
    }

    toggleCompleted() {
        this._completed = !this._completed;
    }

    isCompleted() {
        return this._completed;
    }
}