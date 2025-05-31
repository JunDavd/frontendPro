// const req = fetch('')
// const req2: typeof req
const car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023
};
function getCarBrand(item) {
    return item.brand;
}
console.log(getCarBrand({
    brand: 'Toyota',
    model: 'TXL'
}));
// let cars: Array<typeof car> = []
// cars.push({brand: 'tesla',model: 'x4'})
const testCars = [
    {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2023
    },
    {
        brand: 'Honda',
        model: 'Civic',
        year: 2022
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2021
    },
    {
        brand: 'BMW',
        model: 'X3',
        year: 2024
    },
    {
        brand: 'Honda',
        model: 'Accord',
        year: 2023
    },
    {
        brand: 'Mercedes',
        model: 'C-Class',
        year: 2022
    },
    {
        brand: 'Toyota',
        model: 'RAV4'
    },
    {
        brand: 'BMW',
        model: 'Series 3',
        year: 2023
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2024
    },
    {
        brand: 'Honda',
        model: 'CR-V',
        year: 2021
    } // Honda repetido
];
function getBrandsUnique(items) {
    // let brands = items.map((item) => item.brand)
    // return [...new Set(brands)]
    //la de arriba es otra opcion de implementacion
    let brands = [];
    for (const item of items)if (!brands.includes(item.brand)) brands.push(item.brand);
    return brands;
}
console.log(getBrandsUnique(testCars));

//# sourceMappingURL=frontendPro.af6b9af5.js.map
