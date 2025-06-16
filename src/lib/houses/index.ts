import { Character, Houses } from "./characterInterface";
import { renderCharacterImg } from "./characterRender";
import { getCharacters } from "./hpApi";

//consultar los personajes de cada una de las casas
//crear los elementos de en el dom de las imagenes
//renderizar el contenido


export async function bootstrap(){
    //TODO: OBTENER LOS PERSONAJES PARA CADA UNA DE LAS CASA
   
    for (const house in Houses){
        const characters = await getCharacters(house.toLowerCase())
  
        characters.filter(character => character.image).slice(0,8).forEach((character:Character) => {
            renderCharacterImg(character)
        })
    }
}
bootstrap()