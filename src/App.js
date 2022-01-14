import './App.css';
import { Component } from 'react';
import BookList from './BookList';
import axios from 'axios'
import loading from './loading.gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Harry Potter',
      title: 'Harry Potter',
      books: [],
      hasErrors: false,
      requestRecieved: false
    };
  }

  textHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  searchHandler = (e) => {
    e.preventDefault();

    const word = this.state.text.trim();

    if (word) {
      const searchString = word.replace(/\s/g, '+');

      this.setState({
        books: [],
        requestRecieved: false
      }, () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`)
          .then((response) => {
            const searchedBooks = response.data.items;
            console.log(searchedBooks);

            this.setState({
              text: word,
              title: word,
              books: searchedBooks,
              hasErrors: false,
              requestRecieved: true
            });
          })
          .catch((error) => {
            this.setState({
              hasErrors: true,
              requestRecieved: true
            });
          });
      });
    }
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`)
      .then((response) => {
        const booksArray = response.data.items;

        this.setState({
          books: booksArray,
          hasErrors: false,
          requestRecieved: true
        });
      })
      .catch((error) => {
        this.setState({
          hasErrors: true,
          requestRecieved: true
        });
      });
  }

  render() {
    let output;

    if (typeof this.state.books === 'undefined') {
      output = <p><strong>No books found for {this.state.title}</strong></p>
    } else if (this.state.hasErrors) {
      output = <p>Oh no! Something went wrong. Please try again. </p>
    } else {
      output = (
        <BookList booklist={this.state.books} />
      );
    }
    return (
      <div className="App">
        <div className="header">
          <h1>Search Books!</h1>
          <div className="wrap">
            <form onSubmit={this.searchHandler}>
              <input
                name="text"
                value={this.state.text}
                onChange={this.textHandler}
              />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
        {!this.state.requestRecieved && (
          <img src={loading} />
        )}
        {output}
      </div>
    );
  }
}

export default App;
