import { HtmlElements } from "../bootstrapController"

const FORM_ID = 'contactForm'

const FORM_FIELDS = [
    'name',
    'email',
    'message'
]

function bootstrap(): void{
    //capturar los eventos de submit
    //controlar validaciones
        //si el campo es requerido
        //si se cumple un pattern
        //renderizar un  error
        //bonus-> mostrarlo como notificación
    const contactForm: HTMLFormElement = document.getElementById(FORM_ID) as HTMLFormElement
    if(!contactForm) return
    contactForm.addEventListener('submit', (e) => {
        const form: HTMLFormElement = e.currentTarget as HTMLFormElement
        if(!form) return
        e.preventDefault()
        FORM_FIELDS.forEach(i => {
            //verificar si es correcto
            //si no es correcto muestro un mensaje
            const field = form[i] as HTMLInputElement | HTMLTextAreaElement
            if (!field) return
            const validationStatus:ValidityState = field.validity;
            console.log(form[i])
            console.log(validationStatus)
        })
    })
}

bootstrap()