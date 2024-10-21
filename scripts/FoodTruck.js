import { getEntreeHTML } from "./Entrees.js"
import { Orders, salesButton } from "./Sales.js"
import { SidesHTML } from "./SideDishes.js"
import { VeggiesHTML } from "./Vegetables.js"

export const FoodTruck = async () => {
    const entreeChoices = await getEntreeHTML()
    const sideChoices = await SidesHTML()
    const veggieChoices = await VeggiesHTML()
    const salesButtonHTML = await salesButton()
    const salesHTML = await Orders()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
        <h2>Entrees:</h2>
        <h4>${entreeChoices}</h4>
        </article>

        <article>
        <h2>Veggies: </h2>
        <h4>${veggieChoices}</h4>
        </article>

        <article>
        <h2>Sides: </h2>
        <h4>${sideChoices}</h4>
        </article>

        <article>
        ${salesButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
