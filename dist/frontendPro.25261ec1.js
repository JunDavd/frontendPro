function formatUser(name, age) {
    return `Name: ${name}, age: ${age}`;
}
//nos verifica la implementacion
formatUser('Juan', '34');
function formatUserOptional(name, age) {
    let ret;
    ret = `Name: ${name}`;
    if (age) ret += `, age: ${age}`;
    return ret;
}
console.log(formatUserOptional('juan'));
console.log(formatUserOptional('juan', 34));
function printUser(name = 'Default Name', age) {
    console.log(formatUserOptional(name, age));
}

//# sourceMappingURL=frontendPro.25261ec1.js.map
