
interface IPerson1 {
    dni: string;
    name: string;
    setDni: (dni: string) => void;
    getDni: () => string;
}

interface IStudent1 extends IPerson1 {
    surnames: string;
    age: number;
    grade: string;
}

interface ITeacher1 extends IPerson1 {
    career: string;
}

const dumbeldore: ITeacher1 ={
    career: 'wizzard',
    dni: '123',
    name: 'Dumbeldore',
    getDni: () => '',
    setDni: (dni:string) => {}
}

const harry:IStudent1 = {
    age: 11,
    dni:'1234',
    getDni: () => '',
    grade: 'magic',
    name: 'Harry',
    setDni: (dni: string) => {},
    surnames: 'Potter'
}
console.log(harry['age'])

//EJERCICIO

function getData<T>(person:T, key: keyof T) {
    return person[key]
}

const getData1 = getData<IStudent1>(harry,'dni')
const getData2 = getData(dumbeldore,'career')
console.log(getData1)

const es = {
    home: {
        header: {
            buttonProfile: {
                button1: 'Acceder al perfil',
                button2: {
                    logout: 'salir',
                    login: 'entrar'
                }
            },
            buttonLogout: 'Cerrar sesion'
        }
    }
} as const

function t(path:string, obj:{}):unknown{
    const pathSplit = path.split('.')

    const pathValue = pathSplit.reduce((acumulador, valorActual) =>{
        return acumulador[valorActual]
    },obj)
    return pathValue
    
}
console.log(t('home.header.buttonProfile.button2.logout',es))

//version mas sencilla

type DeepKeys<T> = T extends Record<string,any>
? {
    [k in keyof T]: k extends string
    ?  T[k] extends Record<string,any>
        ? `${k}` | `${k}.${DeepKeys<T[k]>}`
        : `${k}`
    :never
}[keyof T]
:never;
type keysPath  = DeepKeys<typeof es>

function x<T extends Record<string,any>>(path:DeepKeys<typeof es>, obj:{}):unknown{
    return path.split('.').reduce((acc, curr) => {return acc[curr]},obj)
}

console.log(x('home.header.buttonProfile.button2.logou',es))