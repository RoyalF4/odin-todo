import { activeProject } from "./sidebar.js";
import { main, projects } from "../index.js";



function setActiveProject(project) {
    const mainHeader = document.querySelector('#mainHeader');
    if(activeProject != project) {
        if(activeProject != undefined) activeProject.classList.toggle('active');
        activeProject = project;
        let projectId = project.id.slice(11);
        // if main hasnt loaded yet, do nothing
        if(mainHeader != null) mainHeader.textContent = projects.getTitleWithId(projectId);
        activeProject.classList.toggle('active');
    }
}

export { setActiveProject };