import { projects } from "../index.js";
import { createElement, createElementWithId } from "./createDOM";
import { activeProject } from "./sidebar";

function createMain() {
    const main = createElement('main');
    const mainHeader = createElementWithId('div', 'mainHeader');
    mainHeader.textContent = projects.getTitleWithId(activeProject.getAttribute('data-uuid'));




    main.appendChild(mainHeader);

    return main;
}

export {createMain};