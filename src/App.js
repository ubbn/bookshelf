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
            smallThumbnail: 'http://books.google.com/books/content?id=D44dBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
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
            smallThumbnail: 'http://books.google.com/books/content?id=F6B_xHO-IpoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
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
            smallThumbnail: 'http://books.google.com/books/content?id=l8m8DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
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
    // Add the book to shelf based on new status
    if (newStatus !== 'none')
      this.setState((prevState) => ({
        [newStatus]: prevState[newStatus].concat([book])
      }))

    // Remove the book from shelf
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
