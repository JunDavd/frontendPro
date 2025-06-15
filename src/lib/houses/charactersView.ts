import { Character } from "./characterInterface"

export function createCharacterImg(character: Character): string{
    const viewCharacter = `
    <div class="house-character items-center">
        <img class="w-full" src="" alt="${character.name}">
    </div>
    `
    return viewCharacter
}

