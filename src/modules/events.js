import { addProjectModal, sidebarProjects, projects, addProjectForm, deleteConfirmModal } from "../index.js";
import Project from "./Project.js";
import { confirmDeleteModal } from "./modals.js";
import { createSidebarItem } from "./sidebar.js";
import { setActiveProject, getActiveProjectId } from "./util.js";

let currentProjectToDelete;

function selectProject(event) {
    setActiveProject(event.target);
}

function projectRename(event) {
    const id = event.target.type == undefined ? event.target.parentElement.getAttribute('data-uuid') : event.target.getAttribute('data-uuid');

    // toggle visibility of input/button
    const input = document.querySelector(`#input-${id}`);
    input.classList.toggle('hidden');
    input.focus();
    const projectBtn = document.querySelector(`#projectBtn-${id}`)
    projectBtn.classList.toggle('hidden');
}

function submitFormRename(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTitle = Object.fromEntries(formData).title;
    const id = event.target.id.slice(5);
    projects.renameProject(id, newTitle);
    const projectButton = document.querySelector(`#projectBtn-${id}`);
    projectButton.textContent = newTitle;

    // toggle visibility of input/button
    const input = document.querySelector(`#input-${id}`);
    input.classList.toggle('hidden');
    const projectBtn = document.querySelector(`#projectBtn-${id}`)
    projectBtn.classList.toggle('hidden');
}

function projectDelete(event) {
    const id = event.target.type == undefined ? event.target.parentElement.getAttribute('data-uuid') : event.target.getAttribute('data-uuid');
    currentProjectToDelete = id;
    deleteConfirmModal.showModal();
}

function deleteProjectEvent(event) {
    event.preventDefault();
    const container = document.querySelector(`#container-${currentProjectToDelete}`);
    projects.removeProject(currentProjectToDelete);
    container.remove();
    if((projects.list.length == 0) || (currentProjectToDelete == getActiveProjectId())) {
        const mainHeader = document.querySelector('#mainHeader');
        mainHeader.textContent = '';
    }
    deleteConfirmModal.close();
}

function addProjectEvent() {
    addProjectModal.showModal();
}

function submitProjectEvent(event) {
    event.preventDefault();
    const formData = new FormData(addProjectForm);
    const dataObject = Object.fromEntries(formData);
    const newProject = new Project(dataObject.title);
    if(projects.list.length == 0) {
        const mainHeader = document.querySelector('#mainHeader');
        mainHeader.textContent = dataObject.title;
    }
    projects.addProject(newProject);
    sidebarProjects.appendChild(createSidebarItem(newProject));
    addProjectModal.close();
    addProjectForm.reset();
}

function closeAddProjectEvent() {
    addProjectModal.close()
    addProjectForm.reset();
}

function closeDeleteModal() {
    deleteConfirmModal.close()
}

export { addProjectEvent, submitProjectEvent, closeAddProjectEvent, projectRename, submitFormRename, projectDelete, selectProject, closeDeleteModal, deleteProjectEvent, currentProjectToDelete };