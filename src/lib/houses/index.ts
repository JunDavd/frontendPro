import { Character, Houses } from "./characterInterface";
import { createCharacterImg } from "./charactersView";
import { getCharacters } from "./hpApi";

//consultar los personajes de cada una de las casas
//crear los elementos de en el dom de las imagenes
//renderizar el contenido


export async function bootstrap(){
    //TODO: OBTENER LOS PERSONAJES PARA CADA UNA DE LAS CASA
   
    for (const house in Houses){
        const characters = await getCharacters(house.toLowerCase())
  
        characters.forEach((character:Character) => {
            const container = document.getElementById(`${character.house.toLocaleLowerCase()}`)
            if(character.image){
                const imgElement = document.createElement('div')
                imgElement.classList.add('house-character','items-center')
                imgElement.innerHTML = createCharacterImg(character)
                if(container) container.appendChild(imgElement)
            }
        })
    }
}
bootstrap()