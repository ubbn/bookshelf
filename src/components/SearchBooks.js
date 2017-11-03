import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  static propTypes = {
    booksOnShelf: PropTypes.object.isRequired,
    onBookMoved: PropTypes.func.isRequired
  }

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
    let status = 'none'
    const shelves = ['currentlyReading', 'wantToRead', 'read']
    shelves.forEach(shelfName => {
      if (this.props.booksOnShelf[shelfName].find(x => x.id === book.id))
        status = shelfName
    })
    return status
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
