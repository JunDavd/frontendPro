import { Character, Houses } from "./characterInterface";
import { getCharacters } from "./hpApi";

//consultar los personajes de cada una de las casas
//crear los elementos de en el dom de las imagenes
//renderizar el contenido


export async function bootstrap(){
    //TODO: OBTENER LOS PERSONAJES PARA CADA UNA DE LAS CASA
    // const gryffindor:Character[] = await getCharacters('gryffindor')
    // const hufflepuff:Character[]  = await getCharacters('hufflepuff')
    // const ravenclaw:Character[] = await getCharacters('ravenclaw')
    // const slytherin:Character[] = await getCharacters('slytherin')
    // let characters;
    for (const house in Houses){
        const characters = await getCharacters(house.toLowerCase())
        
        characters.forEach((character) => {
            const container = document.getElementById(`${character.house.toLocaleLowerCase()}`)
            const imgElement = document.createElement('div')
            imgElement.innerHTML = 
            console.log(character.name, character.house.toLocaleLowerCase())
        })
    }
    // console.log(characters)
    // characters?.forEach((character) =>{
    //     console.log(character.name)
    // })
    // characters?.map((character) =>{
    //     character.
    // })
    //TODO 2: RENDERIZAR CONTENIDO 

}
bootstrap()