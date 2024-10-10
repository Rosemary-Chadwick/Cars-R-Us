import { setTechnologyId } from "./TransientState.js"


export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const data = await response.json()

    return `
        <div>
            <select id="technologyDrop">
                <option value="0">Please choose technology type</option>
                ${data.map(technology =>
                        `<option value="${technology.id}">${technology.technology}</option>`
                ).join('')}
            </select>
        </div>
    `
}

export const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "technologyDrop") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setTechnologyId(convertedToInteger)
    }
}