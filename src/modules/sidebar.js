import { createElementWithClasses, createElementWithId, createButtonWithImage, createInputRename } from "./createDOM.js";
import { projects } from "../index.js";
import { addProjectEvent, projectRename, projectDelete, selectProject } from "./events.js";
import { createAddProjectModal } from "./modals.js";
import { setActiveProject } from "./util.js";

let activeProject;

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
    container.id = `container-${project.id}`;
    container.dataset.uuid = project.id;
    // set active project to first project on load
    if(activeProject == undefined) {
        setActiveProject(container);
    }

    const projectButton = createElementWithClasses('button', 'sidebarItemBtn');
    projectButton.id = `projectBtn-${project.id}`;
    projectButton.textContent = project.title;
    projectButton.addEventListener('click', (event) => selectProject(event));
    const editButtons = createElementWithClasses('div', 'editButtons');
    const deleteButton = createButtonWithImage('projectDelete', '../src/images/delete.svg');
    deleteButton.dataset.uuid = project.id;
    deleteButton.addEventListener('click', (event) => projectDelete(event));
    const renameButton = createButtonWithImage('projectEdit', '../src/images/edit.svg');
    renameButton.dataset.uuid = project.id;
    renameButton.addEventListener('click', (event) => projectRename(event));

    container.appendChild(createInputRename(project));
    container.appendChild(projectButton);
    editButtons.appendChild(renameButton);
    editButtons.appendChild(deleteButton);
    container.appendChild(editButtons);

    return container;
}

function createAddProjectButton() {
    const button = createElementWithId('button', 'addProjectButton');
    button.textContent = 'Add Project';
    button.addEventListener('click', addProjectEvent);

    return button;
}

export { createSidebar, createSidebarItem, activeProject };