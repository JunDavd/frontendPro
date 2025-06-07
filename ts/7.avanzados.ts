
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
console.log(getData1)