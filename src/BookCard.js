function BookCard({ book }) {
    let thumbnail;

    if (typeof book.volumeInfo.imageLinks !== 'undefined') {
        thumbnail = (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="alt" />
        );
    }

    return (
        <li>
            {thumbnail}
            <a href={book.volumeInfo.infoLink}>
                <h2>{book.volumeInfo.title}</h2>
            </a>
            <p>{book.volumeInfo.categories}</p>
            <p>{book.volumeInfo.description}</p>
        </li>
    );
}

export default BookCard; 