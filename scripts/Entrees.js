import { setEntree } from "./TransientState.js"



const entreeChoice = (changeEvent) =>{
    if (changeEvent.target.name === "entree"){
        const convertedToInt = parseInt(changeEvent.target.value)
        setEntree(convertedToInt)
    }
}

    export const getEntreeHTML = async () =>{
        document.addEventListener("change", entreeChoice )
        const response = await fetch ("http://localhost:8088/entrees")
        const entreeChoices = await response.json()

        let entreeChoicesHTML =  ""
        const entreeChoiceString = entreeChoices.map(
            (entree) => {
                return `<div>
                    <input type= 'radio' name= 'entree' value= '${entree.id}' /> ${entree.name}
                </div>
                `
            }
        )
        entreeChoicesHTML += entreeChoiceString.join("")
        return entreeChoicesHTML
    }