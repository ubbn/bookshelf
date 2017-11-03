import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      books: []
    }
    this.search = this.search.bind(this)
  }

  // Check what is the shelf status of book found in search
  // search it from each status of shelf by id
  getStatus(book){
    const statuses = ['currentlyReading', 'wantToRead', 'read']
    statuses.forEach(status => {
      if (this.props.booksOnShelf[status].find(x => x.id === book.id))
        return status
    })

    return 'none'
  }

  search(e) {
    BooksAPI.search(e.target.value, 20).then(data => {
      this.setState({
        books: data
      })
    })
  }

  render() {  
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
              placeholder="Search by title or author"
              onChange={this.search}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book key={book.id}
                book={book}
                status={this.getStatus(book)}
                onBookMoved={this.props.onBookMoved}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
