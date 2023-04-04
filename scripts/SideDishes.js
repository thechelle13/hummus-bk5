import { getSides, setSides } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSides(parseInt(event.target.value))
    }
})

// When the user selects an item in any of the three columns, the choice should be stored as state in your database.

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = () => {
    let html = "<ul>"

    const listItems = sideDishes.map(dish => {
        return `<li>
            <input type="radio" name="sideDish" value="${dish.id}"/>${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// All 6 side dishes should be displayed as radio input options.