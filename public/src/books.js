function findAuthorById(authors, id) {
  const found = authors.find((identity) => identity.id === id);
  return found;
}

function findBookById(books, id) {
  const found = books.find((identity) => identity.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let checkedOut = [];
  let combined = [];
  books.forEach((book) => {
    if (book.borrows.find((borrow) => borrow.returned === false)) {
      returned.push(book);
    } else {
      checkedOut.push(book);
    }
  });
  combined.push(returned);
  combined.push(checkedOut);
  return combined;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
