import { getVeggies, setVeggies } from "./database.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "veggie") {
        setVeggies(parseInt(event.target.value))
    }
})

// When the user selects an item in any of the three columns, the choice should be stored as state in your database.

export const Veggies = () => {

    let html = `<ul>
        ${
            veggies.map(vegetable => {
                return `<li>
                            <input type="radio" name="veggie" value="${vegetable.id}" /> ${vegetable.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}

//All 9 vegetables should be displayed as radio input options.