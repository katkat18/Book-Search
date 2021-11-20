import BookCard from './BookCard';

function BookList({ booklist }) {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {booklist.map((book) => {
        return (
          <BookCard key={book.etag} book={book} />
        );
      })}
    </ul>
  );
}

export default BookList; 