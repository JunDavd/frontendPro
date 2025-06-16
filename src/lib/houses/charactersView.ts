import { Character } from "./characterInterface"

export function createCharacterImg(character: Character): string{
    const viewCharacter = 
    `
        <img class="w-full" src="${character.image}" alt="${character.name}">
    `
    return viewCharacter
}

