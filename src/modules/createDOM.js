import { projects } from "../index.js";
import { submitFormRename } from "./events.js";

function createElement(element) {
    return document.createElement(element);
}

function createElementWithClasses(element, classes) {
    const newElement = createElement(element);

    // if classes is an array, loop through and add to element
    classes instanceof Array ? classes.forEach((newClass) => newElement.classList.add(newClass)) : newElement.classList.add(classes);

    return newElement;
}

function createElementWithId(element, id) {
    const newElement = createElement(element);
    newElement.id = id
    return newElement;
}

function createTextInput(name, placeholderText, required) {
    const input = createElement('input');
    input.type = 'text';
    input.name = name;
    input.placeholder = placeholderText;
    input.required = required;

    return input;
}

function createButtonWithImage(id, image) {
    const button = createElementWithClasses('button', `${id}Btn`);
    button.type = 'text';
    const img = createElementWithClasses('img', `${id}Img`);
    img.src = image;
    button.appendChild(img);

    return button;
}

function createInputRename(project) {
    const form = createElementWithId('form', `form-${project.id}`)
    form.addEventListener('submit', (event) => submitFormRename(event))
    const input = createElementWithId('input', `input-${project.id}`);
    input.classList.add('hidden');
    input.type = 'text';
    input.name = 'title';
    input.value = project.title;
    input.required = true;

    form.appendChild(input);

    return form;
}

function createHeader() {
    const header = createElement('header');
    const headerLogo = createElement('div');
    headerLogo.textContent = 'Todo List';

    header.appendChild(headerLogo);

    return header;
}

export { createElement, createElementWithClasses, createElementWithId, createHeader, createTextInput, createButtonWithImage, createInputRename };