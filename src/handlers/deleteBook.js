import books from '../books';
import { getFailedResponseWithMessage, getSuccessResponseWithMessage } from '../utils/response';

const findBookIndexById = (bookId) => {
  return books.findIndex((book) => book.id === bookId);
};

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const bookIndex = findBookIndexById(bookId);

  if (bookIndex === -1) {
    return getFailedResponseWithMessage(
      h, 'Buku gagal dihapus. Id tidak ditemukan', 404
    );
  }

  books.splice(bookIndex, 1);

  return getSuccessResponseWithMessage(h, 'Buku berhasil dihapus');
};

export default deleteBookByIdHandler;
