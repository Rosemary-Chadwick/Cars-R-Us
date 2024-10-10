import { saveCustomOrder } from "./TransientState.js"


export const saveOrder = () => {
    document.addEventListener("click", handleOrderClick)
    return `<div><button id="saveOrder">Create Custom Car Order</button></div>`
}

const handleOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        saveCustomOrder()
    }
}