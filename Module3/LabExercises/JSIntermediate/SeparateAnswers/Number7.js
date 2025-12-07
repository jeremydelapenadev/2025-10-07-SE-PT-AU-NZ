// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id. 

function getBookTitle(bookId) {
    const book = books
        .find(b => b.id === bookId);
    return book ? book.title : null; // return null if not found in the array
}

console.log(getBookTitle(3)); // "1984"
console.log(getBookTitle(10)); // null

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

function getOldBooks() {
    return books
        .filter(b => b.year < 1950);
}

console.log(getOldBooks()); // book objects IDs 1, 3, and 4 will show up, as they're all LESS than (or before) 1950

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’. 

function addGenre() {
    return books
        .map(b => ({ ...b, genre: 'classic' }));
}

console.log(addGenre()); // genre: 'classic' is added to all elements (books) in the array

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles
// for books written by authors whose names start with authorInitial.

function getTitles(authorInitial) {
    return books
        .filter(b => b.author.startsWith(authorInitial))
        .map(b => b.title);
}

console.log(getTitles('G')); // ["1984"] -- George Orwell
console.log(getTitles('F')); // ["The Great Gatsby"] -- F. Scoot Fitzgerald

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function latestBook() {
    let latestYear = -Infinity;
    let latest = null;

    books.forEach(b => {
        if (b.year > latestYear) {
            latestYear = b.year;
            latest = b;
        }
    });

    return latest;
}

console.log(latestBook()); // 'To Kill a Mockingbird' with the publication date on 1960