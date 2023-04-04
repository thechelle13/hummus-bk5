import { addPurchases } from "./database.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies} from "./Vegetables.js"
import { Entrees} from "./Entrees.js"


// listening for the click of button event to display stored change events from other modules to display 
document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchases()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div class="choices">

            <article class="options">
                <h2>Base Dish</h2>
                ${Entrees()}
            </article>

            <article class="options">
                <h2>Vegetable</h2>
                ${Veggies()}
            </article>

            <article class="options">
                <h2>Sides</h2>
                ${Sides()}
            </article>
        </div>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
