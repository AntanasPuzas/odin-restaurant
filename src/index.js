import { GenerateHeader } from "./generate-header";
import { GenerateMain} from "./generate-main";
import { GenerateFooter } from "./generate-footer";

import "./style.css";

const addContent = (() => {
    const content = document.createElement("div");
    content.classList.add("content");
    document.querySelector("body").appendChild(content);
})();

GenerateHeader();
GenerateMain();
GenerateFooter();