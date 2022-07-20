import menu from "./menu-items.xml";

export function GenerateMenu() {
    document.querySelector(".content").style.height = "100%";
    const main = (document.querySelector("main")
    ? document.querySelector("main")
    : document.createElement("main"));

    main.className = "";
    main.classList.add("main-menu");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    main.appendChild(title);

    for (const category in menu.menu) {
        const categoryDiv = document.createElement("div");

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = formatCategoryTitle(category);
        
        categoryDiv.append(categoryTitle);

        menu.menu[category][0].item.forEach((el) => { 
            const item = document.createElement("div");

            const italian = document.createElement("p");
            italian.textContent = el.italian[0];

            const english = document.createElement("p");
            english.textContent = el.english[0];

            const price = document.createElement("p");
            price.textContent = el.price[0];

            item.append(italian, english, price);

            categoryDiv.append(item);
        });

        const divider = document.createElement("hr");
        
        main.append(categoryDiv, divider);
    }

    if (!document.querySelector("main")) {
        document.querySelector(".content").append(main);
    }
}

function formatCategoryTitle(title) {
    return title.split("_").map((word) =>
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}