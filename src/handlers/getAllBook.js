import books from '../books';
import { getSuccessResponseWithData } from '../utils/response';

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let filteredBooks;

  if (name) {
    filteredBooks = getFilteredBooks((book) => book.name.toUpperCase().includes(name.toUpperCase()));
  } else if (reading) {
    filteredBooks = getFilteredBooks((book) => book.reading === (reading === '1'));
  } else if (finished) {
    filteredBooks = getFilteredBooks((book) => book.finished === (finished === '1'));
  } else {
    filteredBooks = getFilteredBooks();
  }

  return getSuccessResponseWithData(h, { books: filteredBooks });
};

const getFilteredBooks = (filterFunction = () => true) => {
  return books.filter(filterFunction).map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));
};

export default getAllBooksHandler;
