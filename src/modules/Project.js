import { createUniqueId } from "./createUID";

export default Project;

class Project {
    constructor(title) {
        this._title = title;
        this._list = [];
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
        return this._list;
    }

    addTodo(todo) {
        this._list.push(todo)
    }

    removeTodo(id) {
        for(const todo of this._list) {
            if(id == todo.id) {
                const index = this._list.indexOf(todo)
                this._list.splice(index, 1);
            }
        }
    }
}