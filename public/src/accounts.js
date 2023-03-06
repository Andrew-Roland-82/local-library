function findAccountById(accounts, id) {
  const found = accounts.find((identity) => identity.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastA, lastB) =>
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((accum, book) => {
    return (
      accum +
      book.borrows
        .filter((borrow) => borrow.id === account.id)
        .reduce((accumBorrows, borrow) => accumBorrows + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessed = [];

  books.forEach((book) => {
    if (
      book.borrows.find(
        (borrow) => borrow.id === account.id && borrow.returned === false
      )
    ) {
      possessed.push(book);
    }
  });

  possessed.forEach((book) => {
    let author = authors.find((person) => person.id === book.authorId);
    book["author"] = author;
  });

  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
