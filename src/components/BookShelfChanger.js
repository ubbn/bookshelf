import React from 'react';

class BookShelfChanger extends React.Component {
  constructor(){
    super()
    this.selectionChanged = this.selectionChanged.bind(this)
  }

  selectionChanged(e){
    if (this.props.onMove)
      this.props.onMove(e.target.value)
  }

  render(){
    return (
      <div className="book-shelf-changer">
        <select onChange={this.selectionChanged} value={this.props.status}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
