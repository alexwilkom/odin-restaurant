import Home from "./home";

function InitialPageLoad(contentDiv) {
    document.addEventListener("DOMContentLoaded", () => {
        contentDiv.appendChild(Home());
    });
}

export default InitialPageLoad;