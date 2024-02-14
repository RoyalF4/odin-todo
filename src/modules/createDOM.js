import { projects } from "../index.js";

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
    const button = createElementWithId('button', `${id}Btn`);
    const img = createElementWithId('img', `${id}Img`);
    img.src = image;
    button.appendChild(img);

    return button;
}

function createHeader() {
    const header = createElement('header');
    const headerLogo = createElement('div');
    headerLogo.textContent = 'Todo List';

    header.appendChild(headerLogo);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    return main;
}

export { createElement, createElementWithClasses, createElementWithId, createHeader, createMain, createTextInput, createButtonWithImage };