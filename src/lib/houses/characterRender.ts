import { Character } from "./characterInterface"
import { createCharacterImg } from "./charactersView"

export function renderCharacterImg(character:Character){
    const container = document.getElementById(`${character.house.toLocaleLowerCase()}`)
    const imgElement = document.createElement('div')
        imgElement.classList.add('house-character','items-center')
        imgElement.appendChild(createCharacterImg(character))
        if(container) container.appendChild(imgElement)
}
