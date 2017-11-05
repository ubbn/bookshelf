import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class ListBooks extends React.Component {
  static propTypes = {
    booksOnShelf: PropTypes.object.isRequired,
    onBookMoved: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    booksOnShelf: []
  }

  bookShelves = [{
      title: 'Currently Reading',
      status: 'currentlyReading'
    },{
      title: 'Want to Read',
      status: 'wantToRead'
    },{
      title: 'Read',
      status: 'read'
    },
  ]

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.bookShelves.map(shelf => (
            <BookShelf key={shelf.status} 
              title={shelf.title}
              status={shelf.status}
              books={this.props.booksOnShelf[shelf.status]} 
              onBookMoved={this.props.onBookMoved}
            />              
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
