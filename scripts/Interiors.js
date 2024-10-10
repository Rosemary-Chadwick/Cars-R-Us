import { setInteriorId } from "./TransientState.js"


export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const data = await response.json()

    return `
        <div>
            <select id="interiorDrop">
                <option value="0">Please choose fabric type</option>
                ${data.map(interior => 
                    `<option value="${interior.id}">${interior.interior}</option>`
                ).join('')}
            </select>
        </div>
    `
}

export const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interiorDrop") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setInteriorId(convertedToInteger)
    }
}