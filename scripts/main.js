import { interiorOptions , handleInteriorChoice } from "./Interiors.js";
import { paintOptions , handlePaintChoice } from "./Paints.js";
import { placedOrderList } from "./PlacedOrder.js";
import { saveOrder } from "./saveOrder.js";
import { technologyOptions , handleTechnologyChoice } from "./Technologies.js";
import { wheelOptions , handleWheelChoice } from "./Wheels.js";



const render = async () => {
    const wheelOptionsHTML = await wheelOptions()

// instead of here it could be in the html builder as ${await wheelOptions()}
    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint Color Options</h2>
                ${await paintOptions()}
            </section>

            <section class="choices__interiors options">
                <h2>Interior Fabric Options</h2>
                ${await interiorOptions()}
            </section>

            <section class="choices__technologies options">
                <h2>Sound, Navigation, and Camera Options</h2>
                ${await technologyOptions()}
            </section>

             <section class="choices__wheels options">
                <h2>Wheel Options</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
              ${await saveOrder()} 
            
        </article>

        <div> 
            <h2>Custom Car Orders</h2>
        <article class="customOrders">

             ${await placedOrderList()}
        </article>
        </div>
    `
    const container = document.querySelector('.container');
    container.innerHTML = composedHTML

    document.addEventListener("change", handleWheelChoice)
    document.addEventListener("change", handlePaintChoice)
    document.addEventListener("change", handleInteriorChoice)
    document.addEventListener("change", handleTechnologyChoice)

    document.addEventListener("newOrderCreated", async () => {
        render()

        // const updatedOrdersHTML = await placedOrderList();
        // document.querySelector('.customOrders').innerHTML = updatedOrdersHTML; // Update the orders section
    });
}

// Wait for the DOM to fully load before running render
// document.addEventListener('DOMContentLoaded', () => {
//     render();
// });
render()