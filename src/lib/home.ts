import { DateTime } from "luxon"

//Requisitos:
//definir la fecha proxima
//definar la fecha actual
//calcular la diferencia en dias,horas minutso y segundos
//acutalizar los valores del html

interface HtmlElements {
    days: HTMLElement | null;
    hours: HTMLElement | null;
    minutes: HTMLElement | null;
    seconds: HTMLElement | null;
}

function bootstrap(){
    function updateTime(){
        const dateNow = DateTime.now().setZone("America/New_York")
        const dateFuture = DateTime.fromISO('2025-12-28T12:00')
        const Diff = dateFuture.diff(dateNow,['days','hours','minutes','seconds'])
        console.log(Diff.toObject())
        //seleccionar nodos
        const elements: HtmlElements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
        }
        // const days = document.getElementById('days')
        // const hours = document.getElementById('hours')
        // const minutes = document.getElementById('minutes')
        // const seconds = document.getElementById('seconds')

        //iterar objeto
        Object.entries(elements).forEach(([key, value]) =>{
            const diff = Diff.toObject()
            value.textContent = Math.floor(diff[key]).toString()
            console.log(key)
        })
        
    //    if(days) days.textContent = Math.floor(Diff.days).toString()

    }
    updateTime()
    setInterval(updateTime,1000)
    
    
}
bootstrap()