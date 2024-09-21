import Home from "./home";

function InitialPageLoad(contentDiv) {
    document.addEventListener("DOMContentLoaded", () => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(Home());
    });
}

export default InitialPageLoad;