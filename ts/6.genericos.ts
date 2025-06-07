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
class Library<T> {
    items: T[];
    public createdAT: Date;

    constructor(){
        this.createdAT = new Date()
        this.items = []
    }

    public add(item: T): void{
        this.items.push(item)
    }

    public list(): T[]{
        return this.items
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

const bookLibrary = new Library<Book>()
bookLibrary.add(quijote)

const magazineLibrary = new Library<Magazine>()
magazineLibrary.add(sport)

//implementa una funcon que nos permta peticiones http y
//definir el tipo en el momento de utilizar la funcion


function get<T>(path: string): Promise<T>{
    return fetch(path)
    .then(res => res.json())
    .then(json => json as T)
}

// const books = await get<Book[]>('/books')
// books.map(i => i.isbn)

