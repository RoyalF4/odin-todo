export default ProjectList;

class ProjectList {
    constructor(array = []){
        this._list = array;
    }

    get list() {
        return this._list;
    }

    addProject(project) {
        this._list.push(project);
    }
}