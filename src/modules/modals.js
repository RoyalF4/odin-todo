import { createElementWithId, createTextInput, createElement, createElementWithClasses, appendMultipleChildren } from "./createDOM";
import { body } from "../index.js";
import { submitProjectEvent, closeAddProjectEvent, closeDeleteModal, deleteProjectEvent } from "./events.js";

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
    const dialog = createElementWithId('dialog', editTodoDialog);
    const form = createElementWithId('form', 'editTodoForm');
    form.addEventListener('submit', (event) => editTodoSubmitEvent(event));
    dialog.appendChild(appendMultipleChildren(form, [createLabeledInput('name', 'text', 'required')]));

    body.appendChild(dialog);

}

function createLabeledInput(name, type, required) {
    const container = createElementWithId('div', `${name}-input`);
    const label = document.createElement('label');
    label.htmlFor = name;
    const input = document.createElement('input');
    input.type = type;
    input.name = 'title';
    input.required = required;

    return appendMultipleChildren(container, [label, input]);
}

export { createAddProjectModal, confirmDeleteModal, createLabeledInput, createEditTodoModal } ;