import { setWheelId } from "./TransientState.js"


export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const data = await response.json()
    
    return `
        <div>
            <select id="wheelDrop">
                <option value="0">Please choose wheel type</option>
                ${data.map(wheel =>
                    `<option value="${wheel.id}">${wheel.wheel}</option>`
                    ).join('')}
        
            </select>
        </div>
     `
}

export const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheelDrop") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setWheelId(convertedToInteger)
    }
}