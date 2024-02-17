import { addProjectModal, sidebarProjects, projects, addProjectForm, deleteConfirmModal, editTodoDialog, editTodoForm, addTodoDialog, addTodoForm } from "../index.js";
import Project from "./Project.js";
import Todo from "./Todo.js";
import { confirmDeleteModal } from "./modals.js";
import { activeProject, createSidebarItem } from "./sidebar.js";
import { setActiveProject, getActiveProjectId, getSvgFilter } from "./util.js";
import { createTodoDOM } from "./mainContent.js";

let currentProjectToDelete;
let modalProject;
let modalTodo;

function selectProject(event) {
    setActiveProject(event.target.parentElement);
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
    const todosContainer = document.querySelector('.todosContainer');
    console.log(todosContainer)
    if(getActiveProjectId() == currentProjectToDelete) todosContainer.textContent = '';
    if((projects.list.length == 0) || (currentProjectToDelete == getActiveProjectId())) {
        const mainHeader = document.querySelector('#mainHeader');
        mainHeader.textContent = 'No Project Selected';
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

function deleteTodo(event) {
    let parent = event.target.parentElement;
    let projectId = activeProject.getAttribute('data-uuid');
    if(parent.nodeName != 'DIV') parent = parent.parentElement;
    projects.getProjectWithId(projectId).removeTodo(parent.id);
    parent.remove();
}

function editTodo(event) {
    const parent = (event.target.nodeName == 'IMG') ? event.target.parentElement.parentElement : event.target.parentElement;
    modalProject = projects.getProjectWithId(parent.getAttribute('data-project-id'));
    modalTodo = modalProject.getTodoWithId(parent.getAttribute('data-todo-id'));
    editTodoDialog.showModal();

}

function editTodoSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.srcElement);
    const dataObj = Object.fromEntries(data);
    const todoContainerElements = document.querySelector(`[data-todo-id="${modalTodo.id}"]`).children;
    console.log(dataObj.dueDate)
    todoContainerElements[0].style.filter = getSvgFilter(dataObj.priority);
    todoContainerElements[1].textContent = dataObj.title;
    let dueDate = dataObj.dueDate.split('-');
    todoContainerElements[2].textContent = `Due: ${dueDate[1]}/${dueDate[2]}/${dueDate[0]}`;
    editTodoForm.reset();
    editTodoDialog.close();
}

function closeEditTodo() {
    editTodoDialog.close();
}

function addTodoSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.srcElement);
    const dataObj = Object.fromEntries(data);
    const dueDate = dataObj.dueDate.split('-');
    const newTodo = new Todo(dataObj.title, '', `${dueDate[1]}/${dueDate[2]}/${dueDate[0]}`, dataObj.priority);
    const projectId = activeProject.id.replace('container-', '');
    projects.getProjectWithId(projectId).addTodo(newTodo);
    const todosContainer = document.querySelector('.todosContainer');
    todosContainer.appendChild(createTodoDOM(newTodo));

    addTodoForm.reset();
    addTodoDialog.close();
}

function closeAddTodo() {
    addTodoDialog.close();
}

export { addProjectEvent, submitProjectEvent, closeAddProjectEvent, projectRename, submitFormRename, projectDelete, selectProject, closeDeleteModal, deleteProjectEvent, currentProjectToDelete, deleteTodo, editTodo, closeEditTodo, editTodoSubmit, modalTodo, closeAddTodo, addTodoSubmit};