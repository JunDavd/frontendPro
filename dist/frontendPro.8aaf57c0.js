class Student {
    constructor(dni, name, surnames, age, grade){
        this.dni = dni;
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.grade = grade;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
}
function printFullName(person) {
    console.log(`Name: ${person.name} ${person.surnames}`);
}
const Juan = new Student('0000001h', 'Juan', 'Ruiz', 28, 'Web');
printFullName(Juan);

//# sourceMappingURL=frontendPro.8aaf57c0.js.map
