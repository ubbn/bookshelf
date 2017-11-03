import React from 'react';
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reading: [],
      toRead: [],
      read: []
    }

    this.onBookMoved = this.onBookMoved.bind(this)
  }

  componentDidMount() {
    this.setState({
      reading: [
        {
          title: 'Here Me again',
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          },
          authors: [
            'BBN', 'CNN'
          ],
          id: 3232
        },
      ]
    })
  }

  onBookMoved(status, book) {
    alert('Status: ' + status + ', id: ' + book.id)
    console.log(book)
  }

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
              books={this.state.reading} 
              onBookMoved={this.onBookMoved}/>
            <BookShelf key={2} title={'Want to Read'} books={this.state.reading} />
            <BookShelf key={3} title={'Read'} books={this.state.reading} />
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
