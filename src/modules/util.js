import { activeProject } from "./sidebar.js";
import { main, projects } from "../index.js";
import { createTodoListDOM } from "./mainContent.js";



function setActiveProject(project) {
    const mainHeader = document.querySelector('#mainHeader');
    const todosContainer = document.querySelector('#todoContainer');
    if(activeProject != project) {
        if(activeProject != undefined) activeProject.classList.toggle('active');
        activeProject = project;
        let projectId = project.id.slice(11);
        // if main hasnt loaded yet, do nothing
        if(mainHeader != null) {
            mainHeader.textContent = projects.getTitleWithId(projectId);
            todosContainer.textContent = '';
            todosContainer.appendChild(createTodoListDOM(projects.getProjectWithId(projectId).todo));
        }
        activeProject.classList.toggle('active');
    }

}

function getActiveProjectId() {
    return activeProject.id.slice(10);
}

export { setActiveProject, getActiveProjectId };