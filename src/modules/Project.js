export default Project;

class Project {
    constructor(title) {
        this._title = title;
        this._todoList = [];
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    } 

    addTodo(todo) {
        this._todoList.push(todo)
    }
}