import { Character } from "./characterInterface"

export async function getCharacters(houseName: string): Promise<Character[]> {
    //TODO 
    //llamar a la api para una casa
    //generar los tipos
    //devolver un array de personajes
    try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
        const characters = await response.json()
        return characters as Character[]
    } catch (error) {
        console.log(error)
        throw new Error('error fetching data')
    }
}