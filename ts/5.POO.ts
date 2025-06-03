
interface IPerson {
    dni: string;
    setDni: (dni: string) => void;
    getDni: () => string;
}

interface IStudent {
    name: string;
    surnames: string;
    age: number;
    grade: string;
}

class Student implements IStudent, IPerson{
    dni: string;
    name: string;
    surnames: string;
    age: number;
    grade: string;
    constructor(
        dni: string,
        name: string,
        surnames: string,
        age: number,
        grade: string
    ){
        this.dni = dni
        this.name = name
        this.surnames = surnames
        this.age = age
        this.grade = grade
    }

    getDni(){
        return this.dni
    };

    setDni(dni: string){
        this.dni = dni
    };
}


function printFullName(person: IStudent){
    console.log(`Name: ${person.name} ${person.surnames}`)
}

const Juan = new Student(
    '0000001h',
    'Juan',
    'Ruiz',
    28,
    'Web'
)

printFullName(Juan)