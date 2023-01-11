let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishingYear: 1925,
    genre:"Novel"
}

function bookDescription(book) {
    return `The book ${book.title} was written by ${book.author} in the year ${book.publishingYear} `;
}


console.log(bookDescription(book));