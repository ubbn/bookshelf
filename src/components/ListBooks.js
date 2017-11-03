import React from 'react';
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf key={1} 
              title={'Currently Reading'} 
              books={this.props.booksOnShelf['currentlyReading']} 
              onBookMoved={this.props.onBookMoved}
              status={'currentlyReading'}/>
            <BookShelf key={2}
              title={'Want to Read'}
              books={this.props.booksOnShelf['wantToRead']}
              onBookMoved={this.props.onBookMoved}
              status={'wantToRead'}/>
            <BookShelf key={3} 
              title={'Read'} 
              books={this.props.booksOnShelf['read']}
              onBookMoved={this.props.onBookMoved}
              status={'read'}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
