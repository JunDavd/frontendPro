import { bootstrap } from "./bootstrap"
import { HtmlElements } from "./bootstrap"

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