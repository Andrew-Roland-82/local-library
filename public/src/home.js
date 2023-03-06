function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = books.filter(
    (book) => book.borrows.filter((out) => out.returned === false).length > 0
  );
  return total.length;
}

function getGenres(books) {
  let number = {};
  books.forEach((book) => {
    return number[book.genre] ? number[book.genre]++ : (number[book.genre] = 1);
  });
  return number;
}

function getMostCommonGenres(books) {
  let number = getGenres(books);
  return Object.entries(number)
    .map(([name, count]) => {
      return { name, count };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  const popular = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return popular.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let results = [];

  authors.forEach((author) => {
    const firstName = author.name.first;
    const lastName = author.name.last;
    let identity = {
      name: firstName + " " + lastName,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        identity.count += book.borrows.length;
      }
    });
    results.push(identity);
  });
  return results.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
