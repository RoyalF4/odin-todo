import { projects } from "../index.js";
import { createElement, createElementWithClasses, createElementWithId, createButtonWithImage, appendMultipleChildren } from "./createDOM";
import { activeProject } from "./sidebar";
import { getActiveProjectId } from "./util.js";
import { deleteTodo } from "./events.js";
import { createEditTodoModal } from "./modals.js";

function createMain() {
    createEditTodoModal();
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
    const todosContainer = createElementWithClasses('div', 'todosContainer');
    for(const todo of todos) {
        todosContainer.appendChild(createTodoDOM(todo));
    }

    return todosContainer;
}

function createTodoDOM(todo) {
    const todoContainer = createElementWithClasses('div', 'todoContainer');
    todoContainer.id = todo.id;
    const bulletIcon = createElementWithClasses('img', 'bulletIcon');
    bulletIcon.src = '../src/images/bullet.svg';
    const title = createElementWithClasses('div', 'todoTitle');
    title.textContent = todo.title;
    const dueDate = createElementWithClasses('div', 'todoDueDate');
    dueDate.textContent = `Due: ${todo.dueDate}`;
    const renameButton = createButtonWithImage('todoEdit', '../src/images/edit.svg');
    const deleteButton = createButtonWithImage('todoDelete', '../src/images/delete.svg');
    deleteButton.addEventListener('click', (event) => deleteTodo(event));

    return appendMultipleChildren(todoContainer, [bulletIcon, title, dueDate, renameButton, deleteButton]);
}

export {createMain, createTodoListDOM};