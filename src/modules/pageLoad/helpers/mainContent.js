import { projects, addTodoDialog } from "../index.js";
import { createElement, createElementWithClasses, createElementWithId, createButtonWithImage, appendMultipleChildren } from "./createDOM";
import { activeProject } from "./sidebar";
import { getActiveProjectId, getSvgFilter } from "./util.js";
import { deleteTodo, editTodo } from "./events.js"; // 95% sure that you no need to add .js
import { createEditTodoModal, createAddTodoModal } from "./modals.js";

function createMain() {
    createEditTodoModal();
    createAddTodoModal();
    const main = createElement('main');

    main.appendChild(createHeader());
    main.appendChild(createContent());
    main.appendChild(createAddTodoButton());


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
    todoContainer.dataset.projectId = activeProject.id.replace('container-', '');
    todoContainer.dataset.todoId = todo.id;
    const bulletIcon = createElementWithClasses('img', 'bulletIcon');
    bulletIcon.src = '../src/images/bullet.svg';
    bulletIcon.style.filter = getSvgFilter(todo.priority);
    const title = createElementWithClasses('div', 'todoTitle');
    title.textContent = todo.title;
    const dueDate = createElementWithClasses('div', 'todoDueDate');
    dueDate.textContent = `Due: ${todo.dueDate}`;
    const editButton = createButtonWithImage('todoEdit', '../src/images/edit.svg');
    editButton.addEventListener('click', (event) => editTodo(event));
    const deleteButton = createButtonWithImage('todoDelete', '../src/images/delete.svg');
    deleteButton.addEventListener('click', (event) => deleteTodo(event));

    return appendMultipleChildren(todoContainer, [bulletIcon, title, dueDate, editButton, deleteButton]);
}

function createAddTodoButton() {
    const button = document.createElement('button');
    button.id = 'addTodoBtn'
    button.textContent = 'Add Todo';
    button.addEventListener('click', () => addTodoDialog.showModal())
    return button;
}


export {createMain, createTodoListDOM, createTodoDOM};