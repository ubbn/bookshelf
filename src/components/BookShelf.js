import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book'

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <Book key={book.id} 
              book={book}
              status={props.status}
              onBookMoved={props.onBookMoved}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.protoTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  status: PropTypes.string,
  onBookMoved: PropTypes.func.isRequired
}

BookShelf.defaultProps = {
  books: []
}

export default BookShelf
