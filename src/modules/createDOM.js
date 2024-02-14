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

function createHeader() {
    const header = createElement('header');
    const headerLogo = createElement('div');
    headerLogo.textContent = 'Todo List';

    header.appendChild(headerLogo);

    return header;
}

function createSidebar() {
    const sidebar = createElementWithId('div', 'sidebar');
    return sidebar;
}

function createMain() {
    const main = document.createElement('main');
    return main;
}



export { createElement, createElementWithClasses, createElementWithId, createHeader, createMain, createSidebar };