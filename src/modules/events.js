import { addProjectModal, sidebarProjects, projects, addProjectForm } from "../index.js";
import Project from "./Project.js";
import { createSidebarItem } from "./sidebar.js";

function addProjectEvent() {
    addProjectModal.showModal();
}

function submitProjectEvent(event) {
    event.preventDefault();
    const formData = new FormData(addProjectForm);
    const dataObject = Object.fromEntries(formData);
    const newProject = new Project(dataObject.title);
    projects.addProject(newProject);
    sidebarProjects.appendChild(createSidebarItem(newProject));
    addProjectModal.close();
    addProjectForm.reset();
}

function closeAddProjectEvent() {
    addProjectModal.close()
    addProjectForm.reset();
}

export { addProjectEvent, submitProjectEvent, closeAddProjectEvent };