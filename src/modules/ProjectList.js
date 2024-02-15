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

    renameProject(id, newTitle) {
        for(const project of this._list) {
            if(id == project.id) project.title = newTitle;
        }
    }

    removeProject(id) {
        for(const project of this._list) {
            if(id == project.id) {
                const index =this._list.indexOf(project)
                this._list.splice(index, 1);
            }
        }
        console.log(this._list);
    }
}