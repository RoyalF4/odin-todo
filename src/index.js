import './css/reset.css';
import './css/style.css';
import Todo from './modules/Todo.js';
import Project from './modules/Project.js';
import { pageLoad } from './modules/pageLoad.js';
import ProjectList from './modules/ProjectList.js';


// test data ~~~~~~~~~~~~~~~~~~~~~~~~~~~
const todo1 = new Todo('todo1', 'this is todo1', '02/21/1991', 'low');
const todo2 = new Todo('todo2', 'this is todo2', '11/03/2000', 'high');
const todo3 = new Todo('todo3', 'this is todo3', '12/24/2024', 'medium');

const defaultProject = new Project('Default');
defaultProject.addTodo(todo1);
const project1 = new Project('Project1');
project1.addTodo(todo2);
project1.addTodo(todo3);

const projects = new ProjectList([defaultProject, project1]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const body = document.querySelector('body');
pageLoad();
const header = document.querySelector('header');
const sidebarProjects = document.querySelector('#sidebarProjects');
const main = document.querySelector('main');
const addProjectModal = document.querySelector('#addProjectModal');
const addProjectForm = document.querySelector('#addProjectForm');


export { body, header, sidebarProjects, main, projects, addProjectModal, addProjectForm};
