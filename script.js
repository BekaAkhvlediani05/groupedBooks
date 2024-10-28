const books = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
    {title: "1983", author: "George Orwell", yearPublished: 1949 },
    {title: "The Lord of The Rings", author: "J.R.R. Tolkien", yearPublished: 1954 },
];

const grouped = {};

books.forEach(book => {
    const { author, title, yearPublished } = book;
    if(!grouped[author]){
        grouped[author] = [{title, yearPublished }];
    } else {
        grouped[author] = [...grouped[author], { title, yearPublished}];
    }
})

console.log(grouped);