const book1 = {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
};

const book2 = {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

const book3 = {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

const bookUtils = {
  getFirstPublished: function(book1, book2) {
    return book1.year < book2.year ? book1 : book2;
  },
  setNewEdition: function(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function(book, language) {
    book.language = language;
  },
  setTranslation: function(book, language, translator) {
    book.translation = {
        translator: translator,
        language: language
    };
  },
  setPublisher: function(book, name, location) {
    book.publisher = {
        name: name,
        location: location
    };
  },
  isSamePublisher: function(book1, book2) {
    if(book1.publisher && book2.publisher){
        return book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location;
    }
    return false;
  }
};

console.log(`The first book published was: ${bookUtils.getFirstPublished(book1, book2).name}`);

bookUtils.setNewEdition(book1, 2015);
bookUtils.setLanguage(book1, "English");
bookUtils.setTranslation(book1, "German", "Johannes Steingass");
bookUtils.setPublisher(book1, "Penguin Classics", "United Kingdom")

console.log(`${book1.name} was originally published in ${book1.year}, it's latest edition is from ${book1.latestEdition}, it's written in ${book1.language}, it's translator to German is ${book1.translation.translator} and it's publisher is ${book1.publisher.name} from ${book1.publisher.location}`);

bookUtils.setPublisher(book2, "HarperCollins", "United States")
console.log(`${book1.name} and ${book2.name} are from same publisher ${bookUtils.isSamePublisher(book1, book2)}`)
