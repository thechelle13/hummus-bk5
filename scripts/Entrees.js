import { getEntrees, setEntrees } from "./database.js"

const entrees = getEntrees()



// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
document.addEventListener("change", (event) => {
    if (event.target.name === "entree"){
        setEntrees(parseInt(event.target.value))
    }
})

// When the user selects an item in any of the three columns, the choice should be stored as state in your database.

export const Entrees = () => {
            let html = "<ul>"
    
        // Use .map() for converting objects to <li> elements
        const listItems = entrees.map(entree => {
            return `<li>
                <input type="radio" name="entree" value="${entree.id}"/> ${entree.name}
            </li>`
        })
    
        html += listItems.join("")
        html += "</ul>"
    
        return html
    }


// All 10 base dishes should be displayed as radio input options.


// export const DiamondSizes = () => {
//     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItemsArray = sizes.map(size => {
//         return `<li>
//             <input type="radio" name="size" value="${size.id}" /> ${size.carets}
//         </li>`
//     })

//     html += listItemsArray.join("")
//     html += "</ul>"

//     return html
// }