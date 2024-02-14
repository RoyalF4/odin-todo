import { createElementWithId, createTextInput } from "./createDOM";
import { body } from "../index.js";
import { submitProjectEvent, closeAddProjectEvent } from "./events.js";

const PLACEHOLDER_TEXT = {
    title: 'Enter project title...',
}

const REQUIRED = true;
const NOT_REQUIRED = false;

function createAddProjectModal() {
    const dialog = createElementWithId('dialog', 'addProjectModal');
    const form = createElementWithId('form', 'addProjectForm');
    const input = createTextInput('title', PLACEHOLDER_TEXT.title, REQUIRED)

    form.addEventListener('submit', (event) => submitProjectEvent(event))

    const submitButton = createElementWithId('button', 'addProjectSubmit');
    submitButton.textContent = 'Add';
    submitButton.type = 'submit';
    const closeButton = createElementWithId('button', 'addProjectClose');
    closeButton.textContent = 'Close';
    closeButton.type = 'button';
    closeButton.addEventListener('click', closeAddProjectEvent);

    dialog.appendChild(form);
    form.appendChild(input);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    body.appendChild(dialog);
}

export { createAddProjectModal } ;