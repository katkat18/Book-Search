function BookCard({ book }) {
    let thumbnail;

    if (typeof book.volumeInfo.imageLinks !== 'undefined') {
        thumbnail = (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="alt" />
        );
    }

    return (
        <li>
            <a href={book.volumeInfo.infoLink}>
                <div className="left-side">
                    {thumbnail}
                </div>
                <div className="right-side">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>by: {book.volumeInfo.authors}</p>
                    <p>{book.volumeInfo.categories}</p>
                    <p className="description">{book.volumeInfo.description}</p>
                </div>
            </a>
        </li>
    );
}

export default BookCard; 