function formatUser(
    name:string,
    age:number
): string {
    return `Name: ${name}, age: ${age}`
}

//nos verifica la implementacion

formatUser('Juan', '34')

function formatUserOptional(
    name:string,
    age?:number
    //isMuggle: string
): string {
    let ret:string
    ret = `Name: ${name}`
    if(age){
        ret += `, age: ${age}`
    }
    return ret
}

console.log(formatUserOptional('juan'))
console.log(formatUserOptional('juan',34))

function printUser(
    name: string = 'Default Name',
    age?: number
): void{ //no devuelve nada 
    console.log(formatUserOptional(name,age))
}