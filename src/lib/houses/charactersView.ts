import { Character } from "./characterInterface"

export function createCharacterImg(character: Character): HTMLImageElement{
    const viewCharacter = document.createElement('img')
    viewCharacter.src = character.image
    viewCharacter.alt = character.name
    return viewCharacter
}

