import { createElement, createElementWithClasses, createElementWithId } from "./createDOM.js";
import { projects } from "../index.js";
import { addProjectEvent } from "./events.js";
import { createAddProjectModal } from "./modals.js";

function createSidebar() {
    const sidebar = createElementWithId('div', 'sidebar');
    const sidebarProjects = createElementWithId('div', 'sidebarProjects')
    for(const project of projects.list) {
        sidebarProjects.appendChild(createSidebarItem(project));
    }
    sidebar.appendChild(sidebarProjects);
    sidebar.appendChild(createAddProjectButton());
    createAddProjectModal();

    return sidebar;
}

function createSidebarItem(project) {
    const container = createElementWithClasses('div', 'sidebarItem')
    const button = createElementWithClasses('button', 'sidebarItemBtn');
    button.textContent = project.title;
    container.appendChild(button);
    
    return container;
}

function createAddProjectButton() {
    const button = createElementWithId('button', 'addProjectButton');
    button.textContent = 'Add Project';
    button.addEventListener('click', addProjectEvent);

    return button;
}

export { createSidebar, createSidebarItem };