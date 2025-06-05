interface Product{
    name: string;
    price: number;
    description: string;
    category: string;
}

const products:Array<Product> = [
    {name:'perchero',price: 40,description:'perchero para ropa', category: 'home'},
    {name:'sofa',price: 450,description:'sofa de cuero tipo london', category: 'home'},
    {name:'Mesa de trabajo',price: 250,description:'mesa de madera para trabajo de ofician', category: 'work'},
]

///EJERCICIO 2

interface Service{
    customerName: string;
    price: number;
    periodicity: string;
}

function findCheap(services: Service[]):Service{
    return services.reduce((prev, curr) => (prev.price < curr.price ? prev : curr))
}