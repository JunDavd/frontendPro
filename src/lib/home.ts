import { DateTime,DurationObjectUnits } from "luxon"

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

function bootstrap(container: HTMLElement | null): void{
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
        // const days = document.getElementById('days')
        // const hours = document.getElementById('hours')
        // const minutes = document.getElementById('minutes')
        // const seconds = document.getElementById('seconds')
        
        //iterar objeto
        try {
            Object.entries(elements).forEach(([key, value]) =>{
                if(!value){
                    throw new Error('Missing html element')
                }
                 const diffValue = diff[key as keyof validKeys] || 0
                value.textContent = Math.floor(diffValue).toString()
            })         
        } catch (error) {
            console.log(error)
             Object.entries(elements).forEach(([key, value]) => {
                if (value) {
                    value.textContent = '0'
                }
            })

            if(intervalTimer){
                clearInterval(intervalTimer)
            }
            
            const event = new CustomEvent('element-edition-error')
            container.dispatchEvent(event)
        }

        
    //    if(days) days.textContent = Math.floor(Diff.days).toString()

    }
    updateTime()
    intervalTimer = setInterval(updateTime,1000)
    
}

document.addEventListener('DOMContentLoaded',() =>{
    const container = document.getElementById('about-date')
    container?.addEventListener('element-edition-error',(event) =>{
        const existingNotification = container.querySelector('.error-notification')
        if (existingNotification) {
            existingNotification.remove()
        }
        const notification = document.createElement('p')
            notification.innerHTML = 'La proxima edicíon se anunciara pronto'
            notification.classList.add('block','text-center','bg-gold','text-lg','error-notification')
            container.appendChild(notification)
            const counterContainer = document.querySelectorAll('#counter li')
            counterContainer.forEach((liElement) => {
                liElement.innerHTML = '0'
            })
    })
    bootstrap(container)
})