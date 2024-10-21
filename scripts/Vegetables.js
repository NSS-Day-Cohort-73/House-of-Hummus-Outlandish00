import { setVeggie } from "./TransientState.js"


const veggieChoice = (changeEvent)=>{
    if(changeEvent.target.name === "veggie"){
        const convertedToInt = parseInt(changeEvent.target.value)
        setVeggie(convertedToInt)
    }
}




export const VeggiesHTML = async () => {
    document.addEventListener("change",veggieChoice )
    const response = await fetch("http://localhost:8088/vegetables")
    const veggieChoices = await response.json()

    let veggieHTML = ""
    const veggieOptionsString = veggieChoices.map(
        (veggie)=> {
            return `<div><input type= 'radio' name= 'veggie' value ='${veggie.id}' />${veggie.type}</div>`

        }
    )
    veggieHTML += veggieOptionsString.join("")
    return veggieHTML
}
