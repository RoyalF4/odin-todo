import { projects } from "../index.js";
import { createElement, createElementWithClasses, createElementWithId } from "./createDOM";
import { activeProject } from "./sidebar";
import { getActiveProjectId } from "./util.js";

function createMain() {
    const main = createElement('main');

    main.appendChild(createHeader());
    main.appendChild(createContent());


    return main;
}

function createHeader() {
    const mainHeader = createElementWithId('div', 'mainHeader');
    mainHeader.textContent = projects.getTitleWithId(activeProject.getAttribute('data-uuid'));

    return mainHeader;
}

function createContent() {
    const todos = projects.getProjectWithId(getActiveProjectId()).todo;

    return createTodoListDOM(todos);
}

function createTodoListDOM(todos) {
    const todosContainer = createElementWithId('div', 'todoContainer');
    for(const todo of todos) {
        const todoContainer = createElementWithClasses('div', 'todoContainer');
        todoContainer.textContent = todo.title;
        todosContainer.appendChild(todoContainer);
    }

    return todosContainer;
}

export {createMain, createTodoListDOM};