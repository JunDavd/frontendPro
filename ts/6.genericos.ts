interface Book{
    title: string;
    author: string;
    year: number;
    isbn: string;
}

interface Magazine{
    name: string;
    topic: string;
    date: Date;
    ean: number;
}

//cada libreria puede contener solo un tipo en el array
class Library <T>{
    items: T[];
    public createdAT: Date;

    constructor(){
        this.createdAT = new Date()
        this.items = []
    }

    public add(item: T): void{
        this.items.push(item)
    }
}

const quijote: Book = {
    author: 'Cervantes',
    isbn: '123',
    title: 'quijote',
    year: 1920
}

const sport:Magazine = {
    date: new Date(),
    ean: 12345,
    name: 'sport',
    topic: 'sports'
}

const booksLibrary = new Library()
booksLibrary.add(quijote)
booksLibrary.add(sport)