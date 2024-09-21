import * as menuImages from "../images/menu/menu-images";
import Card from "./Card";

function Menu() {
    const meals = [
        {
            name: "Fig Salad",
            url: menuImages.figSalad
        },
        {
            name: "Involtini",
            url: menuImages.involtini
        },
        {
            name: "Noodles",
            url: menuImages.noodles
        },
        {
            name: "Pizza",
            url: menuImages.pizza
        },
        {
            name: "Salad",
            url: menuImages.salad
        },
        {
            name: "Vegetables",
            url: menuImages.vegetables
        },
    ];

    const menuSection = document.createElement("section");
    menuSection.id = "menu-food";

    meals.forEach(meal => {
        menuSection.appendChild(Card(meal.url, meal.name));
    })

    return menuSection
}

export default Menu;