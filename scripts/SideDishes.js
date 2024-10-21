import { setSide } from "./TransientState.js"

const sideChoice = (changeEvent) => {
    if (changeEvent.target.name==="sides"){
        const convertedToInt = parseInt(changeEvent.target.value)
        setSide(convertedToInt)
    }

}


export const SidesHTML = async () => {
    document.addEventListener("change", sideChoice)
    const response = await fetch("http://localhost:8088/sides")
    const sideChoices = await response.json()
    let sideChoicesHTML = ""
    const sideChoiceString = sideChoices.map(
        (side) => {
            return `
            <div>
            <input type= 'radio' name='sides' value= '${side.id}' />${side.title}
            </div>
            `
        }
    )
    sideChoicesHTML += sideChoiceString.join("")
    return sideChoicesHTML
}

