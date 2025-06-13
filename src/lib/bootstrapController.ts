import { DateTime,DurationObjectUnits } from "luxon"

//Requisitos:
//definir la fecha proxima
//definar la fecha actual
//calcular la diferencia en dias,horas minutso y segundos
//acutalizar los valores del html

export interface HtmlElements {
    days: HTMLElement | null;
    hours: HTMLElement | null;
    minutes: HTMLElement | null;
    seconds: HTMLElement | null;
}

export function bootstrap(container: HTMLElement | null): void{
    let intervalTimer: number | null = null
    function updateTime(): void{
        const dateNow: DateTime = DateTime.now().setZone("America/New_York")
        let dateFuture: DateTime = DateTime.fromISO('2025-12-28T12:00')
        const diff: DurationObjectUnits = dateFuture.diff(dateNow,['days','hours','minutes','seconds']).toObject()
        type validKeys = typeof diff
        //seleccionar nodos
        if(dateFuture >= dateNow){
            dateFuture = dateFuture.plus({year: 1})
        }
        const elements: HtmlElements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
        }
        //iterar objeto

        try {
            Object.entries(elements).forEach(([key, value]) =>{
                if(!value){
                    throw new Error(`Missing htmlelement id: ${key}, in index.html`)
                }
                 const diffValue = diff[key as keyof validKeys] || 0
                value.textContent = Math.floor(diffValue).toString()
            })         
        } catch (error) {
            console.log(error)
             Object.entries(elements).forEach(([key, value]) => {
                if(value) value.textContent = '0'})

            if(intervalTimer) clearInterval(intervalTimer)
              
            const event = new CustomEvent('element-edition-error')
            if(container) container.dispatchEvent(event)
        }

    }
    updateTime()
    intervalTimer = setInterval(updateTime,1000)
    
}