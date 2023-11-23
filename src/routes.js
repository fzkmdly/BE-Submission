const addNewBook = require("./handlers/AddNewBook");
const getAllBooksHandler = require("./handlers/getAllBook");
const getBookByIdHandler = require("./handlers/getBookbyId");
const updateBookByIdHandler = require("./handlers/updateBook");
const deleteBookByIdHandler = require("./handlers/deleteBook");


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

module.exports =  routes;
