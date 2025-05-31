type Brand = 'Audi' | 'Skoda' | 'Mercedes'

enum Brands {
    AUDI = 'Audi',
    SKODA = 'Skoda',
    MERCEDES = 'Mercedes'
}

interface car {
    brand: Brands,
    model: string,
    year?: number,
    // start(): void SON LOS MISMO CON LA DE ABAJO
    start: () => void
}

const audiA3: car = {
    brand: Brands.AUDI,
    model: 'A3',
    year: 2024,
    start: () =>{
        console.log('Car started')
    }
}

function carBranUnique(item:car){
    return item.brand
}

console.log(audiA3.brand)