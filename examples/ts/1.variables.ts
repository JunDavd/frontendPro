//VARIABLES TIPOS PRIMITIVOS
let fullname: string = 'Harry potter'
let age:number = 11
let isMuggle: boolean = true

fullname = 11
age = 'hola'

let tel: string | number = '+34585959'
tel = 58686959

// tipos indefinidos
const request: any = {}
//existen configs de eslint y tsconfig para rechazar los anys
const response: unknown = {}

//inferencia de tiposs
let howardsHouse = 'Grifindor'