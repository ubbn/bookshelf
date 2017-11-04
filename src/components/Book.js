import React from 'react';
import PropTypes from 'prop-types'

import ShelfChanger from './BookShelfChanger'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    status: PropTypes.string,
    onBookMoved: PropTypes.func.isRequired
  }

  render() {
    const { book, status, onBookMoved } = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, height: 193,
            backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}>
          </div>
          <ShelfChanger status={!!status ? status : 'none'}
            onMove={newStatus => onBookMoved(book, newStatus, this.props.status)}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors instanceof Array && book.authors.join(', ')}</div>
      </div>  
    )
  }
}

export default Book
