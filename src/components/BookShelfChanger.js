import React from 'react';

class BookShelfChanger extends React.Component {
  constructor(){
    super()
    this.selectionChanged = this.selectionChanged.bind(this)
  }

  selectionChanged(e){
    //alert('Selection is changed ' + e.target.value)
    if (this.props.onMove)
      this.props.onMove(e.target.value)
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
    },
    {
      value: 'none',
      label: 'None'
    }
  ]

  render(){
    return (
      <div className="book-shelf-changer">
        <select onChange={this.selectionChanged}>
          <option value="none" disabled>Move to...</option>
          {this.selectOptions.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
