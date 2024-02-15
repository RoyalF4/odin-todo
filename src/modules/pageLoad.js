import { createHeader } from "./createDOM.js";
import { createSidebar } from "./sidebar.js";
import { body } from "../index.js";
import { createMain } from "./mainContent.js";

function pageLoad() {

    body.appendChild(createHeader());
    body.appendChild(createSidebar());
    body.appendChild(createMain());
}

export { pageLoad };

