//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

function BookCard({ book }) {
    let thumbnail;

    if (typeof book.volumeInfo.imageLinks !== 'undefined') {
        //thumbnail = book.volumeInfo.imageLinks.thumbnail;
        thumbnail = (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="alt" />
        );
    }

    return (
        /*
        <Card style={{ width: '15rem', height: '100%' }} bg="light">

            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Text>
                    by: {book.volumeInfo.authors}
                </Card.Text>
                <Card.Text>
                    {book.volumeInfo.description}
                </Card.Text>
                <Button href={book.volumeInfo.infoLink} variant="primary">Buy</Button>
            </Card.Body>
        </Card>*/

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