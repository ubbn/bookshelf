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

  search(e) {
    BooksAPI.search(e.target.value, 10).then(data => {
      this.setState({
        books: data
      })
    })
  }

  render() {  
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" 
              placeholder="Search by title or author"
              onChange={this.search}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book book={book} key={book.id}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
