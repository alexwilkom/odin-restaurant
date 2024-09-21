import Home from "./components/Home";

const contentDiv = document.querySelector("#content");

function App() {
    document.addEventListener("DOMContentLoaded", () => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(Home());
    });
}

export default App;