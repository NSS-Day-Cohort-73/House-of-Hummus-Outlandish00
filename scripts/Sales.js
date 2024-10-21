import { purchaseOrder } from "./TransientState.js"


const handlePurchase = (clickEvent) => {
    if (clickEvent.target.id === "purchase"){
        purchaseOrder()
    }
}

export const salesButton = () => {
    document.addEventListener("click", handlePurchase )
    
    return `<button id="purchase">Purchase Combo</button>`
}





export const Orders = async () => {

    const fetchResponse = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const purchases = await fetchResponse.json()
    console.log(purchases)
    if (purchases.length != 0){
    let purchaseHTMLstring = purchases.map (
        (purchase)=> {
            const purchasePrice = purchase.entree.price + purchase.vegetable.price + purchase.side.price
            return `<div>Receipt #${purchase.id} = $${purchasePrice}</div>`
        }
    )
    let purchaseHTML = purchaseHTMLstring.join("")
    return purchaseHTML
} else {
    return `No orders placed`
}
    
}

