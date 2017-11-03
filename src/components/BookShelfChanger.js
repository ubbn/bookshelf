import React from 'react';
import PropTypes from 'prop-types'

class BookShelfChanger extends React.Component {
  static propTypes = {
    status: PropTypes.string,
    onMove: PropTypes.func.isRequired
  }

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
          <option value="" disabled>Move to...</option>
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
