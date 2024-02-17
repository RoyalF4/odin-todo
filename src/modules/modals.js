import { createElementWithId, createTextInput, createElement, createElementWithClasses, appendMultipleChildren } from "./createDOM";
import { body } from "../index.js";
import { submitProjectEvent, closeAddProjectEvent, closeDeleteModal, deleteProjectEvent, closeEditTodo, editTodoSubmit, modalTodo, closeAddTodo, addTodoSubmit } from "./events.js";
import { format } from 'date-fns';

const PLACEHOLDER_TEXT = {
    title: 'Enter project title...',
}

const REQUIRED = true;
const NOT_REQUIRED = false;

function createAddProjectModal() {
    const dialog = createElementWithId('dialog', 'addProjectModal');
    const form = createElementWithId('form', 'addProjectForm');
    const input = createTextInput('title', PLACEHOLDER_TEXT.title, REQUIRED)

    form.addEventListener('submit', (event) => submitProjectEvent(event))

    const submitButton = createElementWithId('button', 'addProjectSubmit');
    submitButton.textContent = 'Add';
    submitButton.type = 'submit';
    const closeButton = createElementWithId('button', 'addProjectClose');
    closeButton.textContent = 'Close';
    closeButton.type = 'button';
    closeButton.addEventListener('click', closeAddProjectEvent);

    dialog.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    body.appendChild(dialog);
}

function confirmDeleteModal() {
    const dialog = createElementWithId('dialog', 'deleteConfirmDialog');
    const form = createElementWithId('form', 'deleteConfirmForm');
    form.addEventListener('submit', (event) => deleteProjectEvent(event))

    const prompt = createElement('div');
    prompt.textContent =`Are you sure you want to delete your project?`;

    const buttonContainer = createElement('div');

    const yesButton = createElementWithId('button', 'deleteProjectSubmit');
    yesButton.textContent = 'Yes';
    yesButton.type = 'submit';
    const noButton = createElementWithId('button', 'deleteProjectClose');
    noButton.textContent = 'No';
    noButton.type = 'button';
    noButton.addEventListener('click', closeDeleteModal);

    dialog.appendChild(form);
    form.appendChild(prompt);
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);
    form.appendChild(buttonContainer);

    body.appendChild(dialog);
}

function createEditTodoModal() {
    const dialog = createElementWithId('dialog', 'editTodoDialog');
    const form = createElementWithId('form', 'editTodoForm');
    form.addEventListener('submit', (event) => editTodoSubmit(event))
    const buttonContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Close';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', () => closeEditTodo())
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    dialog.appendChild(appendMultipleChildren(form, [editNameInput('name', 'text', 'required'), createDateInput(), createPriorityInput(), buttonContainer]));

    body.appendChild(dialog);

}

function editNameInput(name, type, required) {
    const container = createElementWithClasses('div', `${name}-input`);
    const label = document.createElement('label');
    label.htmlFor = name;
    label.textContent = capitalizeFirstLetter(name);
    const input = document.createElement('input');
    input.type = type;
    input.id = 'name'
    input.name = 'title';
    input.required = required;

    return appendMultipleChildren(container, [label, input]);
}

function createDateInput() {
    const todaysDate = format(new Date(), 'yyyy-MM-dd');
    const container = document.createElement('div');
    container.classList.add('date-input');
    const label = document.createElement('label');
    label.htmlFor = 'dueDate';
    label.textContent = 'Due Date';
    const input = document.createElement('input');
    input.type = 'date';
    input.name = 'dueDate';
    input.id = 'dueDate';
    input.required = true;
    input.value = todaysDate;
    input.min = todaysDate;
    container.appendChild(label);
    container.appendChild(input);

    return container;
}

function createPriorityInput() {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Priority';
    fieldset.appendChild(legend);
    fieldset.appendChild(createRadioInput('low'));
    fieldset.appendChild(createRadioInput('medium'));
    fieldset.appendChild(createRadioInput('high'));

    return fieldset;
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function createRadioInput(name) {
    const container = document.createElement('div');
    const input = document.createElement('input');
    input.id = `${name}Radio`;
    input.required = true;
    input.type = 'radio';
    input.name = 'priority';
    input.id = name;
    input.value = name;
    const label = document.createElement('label');
    label.htmlFor = name;
    label.textContent = capitalizeFirstLetter(name);
    container.appendChild(input);
    container.appendChild(label);

    return container;
}

function createAddTodoModal() {
    const dialog = createElementWithId('dialog', 'addTodoDialog');
    const form = createElementWithId('form', 'addTodoForm');
    form.addEventListener('submit', (event) => addTodoSubmit(event))
    const buttonContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Close';
    cancelButton.type = 'button';
    cancelButton.addEventListener('click', () => closeAddTodo())
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    dialog.appendChild(appendMultipleChildren(form, [editNameInput('name', 'text', 'required'), createDateInput(), createPriorityInput(), buttonContainer]));

    body.appendChild(dialog);

}

export { createAddProjectModal, confirmDeleteModal, editNameInput, createEditTodoModal, createAddTodoModal } ;