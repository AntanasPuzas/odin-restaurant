import Map from "./map.png";

export function GenerateContact() {
    document.querySelector(".content").style.height = "100vh";

    const main = (document.querySelector("main")
        ? document.querySelector("main")
        : document.createElement("main"));
    main.className = "";
    main.classList.add("main-contact");

    const container = document.createElement("div");

    const contacts = document.createElement("div");

    const addressDiv = document.createElement("div");
    const addressTitle = document.createElement("p");
    addressTitle.textContent = "Address: "
    const address = document.createElement("p");
    address.textContent = "Via Castelfidardo 138, Bianchi, Italy";
    addressDiv.append(addressTitle, address);

    const phoneDiv = document.createElement("div");
    const phoneTitle = document.createElement("p");
    phoneTitle.textContent = "Phone Number: ";
    const phone = document.createElement("p");
    phone.textContent = "0382 9389411";
    phoneDiv.append(phoneTitle, phone);

    const map = document.createElement("img");
    map.src = Map;

    contacts.append(addressDiv, phoneDiv);
    container.append(contacts, map);
    main.append(container);

    if (!document.querySelector("main")) {
        document.querySelector(".content").append(main);
    }
}