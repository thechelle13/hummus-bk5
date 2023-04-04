import { getVeggies, getPurchases, getSides, getEntrees } from "./database.js"

const buildOrderListItem = (order) => {

    const veggies = getVeggies()
    const veggie = veggies.find( (veggie) => {
        return veggie.id === order.veggieId
    })

    const sides = getSides()
    const side = sides.find( (side) => {
        return side.id === order.sideId
    })

    const entrees = getEntrees()
    const entree = entrees.find( (entree) => {
        return entree.id === order.entreeId
    })

    const total = veggie.price + entree.price + side.price

    const costString = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} = ${costString}
    </li>`

}

export const Sales = () => {
    const purchases = getPurchases()
    console.log(purchases)
    let html = "<ul>"

    const listItems = purchases.map(buildOrderListItem)
    
    html += listItems.join("")
    html += "</ul>"

    return html
}


    
    
   
    

        
    
    
