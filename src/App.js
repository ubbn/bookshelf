import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      'currentlyReading': [],
      'wantToRead': [],
      'read': []
    }

    this.onBookMoved = this.onBookMoved.bind(this)
  }

  componentDidMount(){
    this.setState({
      'currentlyReading': [
        {
          title: 'Reading Now',
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          },
          authors: [
            'BBN', 'CNN'
          ],
          id: 3231
        },            
      ],
      'wantToRead': [
        {
          title: 'Want To Read',
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          },
          authors: [
            'BBN', 'CNN'
          ],
          id: 3232
        },            
      ],      
      'read': [
        {
          title: 'Book I read',
          imageLinks: {
            smallThumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          },
          authors: [
            'WWW', 'OOP'
          ],
          id: 3233
        },            
      ]      
    })
  }

  onBookMoved(book, newStatus, oldStatus){
    // alert('From: ' + oldStatus + ', to: ' + newStatus + ', id: ' + book.id)

    if (newStatus !== 'none')
      this.setState((prevState) => ({
        [newStatus]: prevState[newStatus].concat([book])
      }))
    
    if (oldStatus !== 'none')
      this.setState((prevState) => ({
        [oldStatus]: prevState[oldStatus].filter(x => x.id !== book.id)
      }))
  }

  render() {
    return (
      <BrowserRouter className='app'>
        <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks booksOnShelf={this.state}
              onBookMoved={this.onBookMoved}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks booksOnShelf={this.state}
              onBookMoved={this.onBookMoved} />
          )}/>        
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
