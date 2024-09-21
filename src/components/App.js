import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

function App() {
    const contentDiv = document.querySelector("#content");
    const homeBtn = document.querySelector("#btn-home");
    const menuBtn = document.querySelector("#btn-menu");
    const contactBtn = document.querySelector("#btn-contact");

    const render = (component) => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(component());
    };

    const initialize = () => {
        render(Home); // Render home on page load

        homeBtn.addEventListener("click", () => render(Home));
        menuBtn.addEventListener("click", () => render(Menu));
        contactBtn.addEventListener("click", () => render(Contact));
    };

    document.addEventListener("DOMContentLoaded", initialize);
}

export default App;