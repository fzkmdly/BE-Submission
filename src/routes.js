import addNewBook from "./handlers/AddNewBook";
import getAllBooksHandler from "./handlers/getAllBook";
import getBookByIdHandler from "./handlers/getBookbyId";
import updateBookByIdHandler from "./handlers/updateBook";
import deleteBookByIdHandler from "./handlers/deleteBook";

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

export default routes;
