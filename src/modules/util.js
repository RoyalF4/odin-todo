import { activeProject } from "./sidebar.js";
import { main, projects } from "../index.js";
import { createTodoListDOM } from "./mainContent.js";

const FILTERS = {
    low: 'var(--svgFilterGreen)',
    medium: 'var(--svgFilterYellow',
    high: 'var(--svgFilterRed)'
}

function setActiveProject(project) {
    const mainHeader = document.querySelector('#mainHeader');
    console.log(mainHeader)
    const todosContainer = document.querySelector('.todosContainer');
    if(activeProject != project) {
        if(activeProject != undefined) activeProject.classList.toggle('active');
        activeProject = project;
        // let projectId = project.id.slice(11);
        let projectId = project.id.replace('container-', '').replace('projectBtn-', '');
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

function getSvgFilter(priority) {
    return FILTERS[priority];
}

export { setActiveProject, getActiveProjectId, getSvgFilter };