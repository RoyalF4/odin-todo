import { activeProject } from "./sidebar.js";

function setActiveProject(project) {
    if(activeProject != project) {
        if(activeProject != undefined) activeProject.classList.toggle('active');
        activeProject = project;
        activeProject.classList.toggle('active');
    }
}

export { setActiveProject };