import Logo from "./logo.svg"
import { GenerateMain, ClearMain } from "./generate-main";
import { GenerateMenu } from "./generate-menu";
import { GenerateContact } from "./generate-contact";

export function GenerateHeader() {
    const content = document.querySelector(".content");

    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const logo = document.createElement("img")
    logo.src = Logo;
    logo.addEventListener("click", () => {
        ClearMain();
        GenerateMain();
    })

    const tabList = document.createElement("ul");

    const links = ["Home", "Menu", "Contact"];
    links.forEach(el => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = el;
        item.appendChild(link);
        tabList.appendChild(item);
    })

    nav.appendChild(logo);
    nav.appendChild(tabList);
    header.appendChild(nav);
    content.appendChild(header);

    const home = document.querySelector("header>nav>ul>li:first-child");
    home.addEventListener("click", () => {
        ClearMain();
        GenerateMain();
    })

    const menu = document.querySelector("header>nav>ul>li:nth-child(2)");
    menu.addEventListener("click", () => {
        ClearMain();
        GenerateMenu();
    })

    const contact = document.querySelector("header>nav>ul>li:last-child");
    contact.addEventListener("click", () => {
        ClearMain();
        GenerateContact
    })
}