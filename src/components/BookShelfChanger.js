import React from 'react';

class BookShelfChanger extends React.Component {
  constructor(){
    super()
    this.selectionChanged = this.selectionChanged.bind(this)
  }

  selectOptions = [
    {
      value: 'currentlyReading',
      label: 'Currently Reading'
    },
    {
      value: 'wantToRead',
      label: 'Want to Read'
    },
    {
      value: 'read',
      label: 'Read'
    }
  ]

  selectionChanged(e){
    if (this.props.onMove)
      this.props.onMove(e.target.value)
  }

  render(){
    return (
      <div className="book-shelf-changer">
        <select onChange={this.selectionChanged}>
          <option value="none" disabled>Move to...</option>
          {this.selectOptions.map(option => (
            <option value={option.value}
              selected={this.props.status === option.value}>{option.label}
            </option>
          ))}
          <option value="none" selected={!this.props.status}>None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
