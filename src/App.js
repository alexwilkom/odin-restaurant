import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.querySelector("#btn-home");
    const menuDiv = document.querySelector("#btn-menu");
    const contactDiv = document.querySelector("#btn-contact");

    const render = (component) => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(component());
    };

    const initialize = () => {
        render(Home); // Render home on page load

        homeDiv.addEventListener("click", () => render(Home));
        menuDiv.addEventListener("click", () => render(Menu));
        contactDiv.addEventListener("click", () => render(Contact));
    };

    document.addEventListener("DOMContentLoaded", initialize);
}

export default App;