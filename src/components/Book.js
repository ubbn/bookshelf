import React from 'react';
import ShelfChanger from './BookShelfChanger'

class Book extends React.Component {
  render() {
    const { book } = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, height: 193, 
            backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}>
          </div>
          <ShelfChanger status={this.props.status}
            onMove={newStatus => this.props.onBookMoved(book, newStatus, this.props.status)}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>  
    )
  }
}

export default Book
