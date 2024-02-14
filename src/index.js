import './css/reset.css';
import './css/style.css';
import Todo from './modules/Todo.js';
import Project from './modules/Project.js';
import { pageLoad } from './modules/pageLoad.js';
import { createElement, createElementWithClasses, createElementWithId } from './modules/createDOM.js';


// test data ~~~~~~~~~~~~~~~~~~~~~~~~~~~
const todo1 = new Todo('todo1', 'this is todo1', '02/21/1991', 'low');
const todo2 = new Todo('todo2', 'this is todo2', '11/03/2000', 'high');
const todo3 = new Todo('todo3', 'this is todo3', '12/24/2024', 'medium');

const defaultProject = new Project('Default');
defaultProject.addTodo(todo1);
const project1 = new Project('Project1');
project1.addTodo(todo2);
project1.addTodo(todo3);

const projects = [defaultProject, project1];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const body = document.querySelector('body');
const header = document.querySelector('header');
const sidebar = document.querySelector('#sidebar');
const main = document.querySelector('main');


pageLoad();

export { body, header, sidebar, main};
