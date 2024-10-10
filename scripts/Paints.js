import { setPaintId } from "./TransientState.js"


export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const data = await response.json()

    return `
        <div>
            <select id="paintDrop">
                <option value="0">Please choose paint color</option>
                ${data.map(paint =>
                    `<option value="${paint.id}">${paint.paint}</option>`
                ).join('')}           
            </select>
        </div>
    `
}

export const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "paintDrop") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setPaintId(convertedToInteger)
    }
}