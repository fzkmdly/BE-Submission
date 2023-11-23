import books from '../books';
import {
  getFailedResponseWithMessage,
  getSuccessResponseWithMessage,
} from '../utils/response';

const updateBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name || readPage > pageCount) {
    const message = !name ?
      'Gagal memperbarui buku. Mohon isi nama buku' :
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
    return getFailedResponseWithMessage(h, message, 400);
  }

  const bookIndex = findBookIndexById(bookId);

  if (bookIndex === -1) {
    return getFailedResponseWithMessage(
      h, 'Gagal memperbarui buku. Id tidak dapat ditemukan', 404
    );
  }

  const updatedAt = new Date().toISOString();
  books[bookIndex] = {
    ...books[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt,
  };

  return getSuccessResponseWithMessage(h, 'Buku sudah diperbaharui');
};

const findBookIndexById = (bookId) => books.findIndex((book) => book.id === bookId);

export default updateBookByIdHandler;
