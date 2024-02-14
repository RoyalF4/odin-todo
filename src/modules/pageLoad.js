import { createHeader, createSidebar, createMain } from "./createDOM.js";
import { body} from "../index.js";

function pageLoad() {

    body.appendChild(createHeader());
    body.appendChild(createSidebar());
    body.appendChild(createMain());
}

export { pageLoad };

