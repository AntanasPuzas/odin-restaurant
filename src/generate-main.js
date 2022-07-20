export function GenerateMain() {
    const content = document.querySelector(".content");

    const main = document.createElement("main");

    const text = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Welcome to El Restaurante!";

    const paragraph = document.createElement("p")
    paragraph.textContent = "We hope you enjoy the food just as much as we enjoyed making it!";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
        console.log("test");
    });

    const divider = document.createElement("div");

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", () => {
        console.log("test");
    });

    text.append(title, paragraph);
    buttonContainer.append(menuButton, divider, contactButton);
    main.append(text, buttonContainer);
    content.append(main);
}