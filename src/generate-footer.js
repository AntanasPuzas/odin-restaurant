export function GenerateFooter() {
    const content = document.querySelector(".content");

    const footer = document.createElement("footer");

    const developedBy = document.createElement("p");
    developedBy.textContent = "Developed by";
    
    const divider = document.createElement("div");

    const developerName = document.createElement("p");
    const developerLink = document.createElement("a");
    developerLink.target = "_blank";
    developerLink.href = "https://github.com/AntanasPuzas";
    developerLink.textContent = "Antanas Pužas";
    developerName.appendChild(developerLink);

    const shoutout = document.createElement("p");
    shoutout.textContent = "Photo by ";

    const shoutoutCreatorLink = document.createElement("a");
    shoutoutCreatorLink.target = "_blank";
    shoutoutCreatorLink.href = "https://unsplash.com/@foodiesfeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    shoutoutCreatorLink.textContent = "Jakub Kapusnak";

    shoutout.append(shoutoutCreatorLink, " on ");

    const shoutoutWebsiteLink = document.createElement("a");
    shoutoutWebsiteLink.target = "_blank";
    shoutoutWebsiteLink.href = "https://unsplash.com/s/photos/italian-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    shoutoutWebsiteLink.textContent = "Unsplash";
    
    shoutout.appendChild(shoutoutWebsiteLink);

    footer.append(developedBy, divider, developerLink, shoutout);

    content.append(footer);
}