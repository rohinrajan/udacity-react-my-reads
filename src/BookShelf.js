import React, { Component } from 'react'
import './App.css'
import { PropTypes } from 'prop-types'


class BookShelf extends Component{

  static propTypes = {
    bookList : PropTypes.array.isRequired,
    book_title : PropTypes.string.isRequired,
    updateBookShelf : PropTypes.func.isRequired
  }

  // passing the books array and converting into the bookshelf format
  render(){
    const {bookList, book_title, updateBookShelf} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{book_title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book)=> (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover"
                      style={{ width: 128, height: 192,
                        backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(e) => updateBookShelf(book,e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  { typeof book.authors !== "undefined" && (<div className="book-authors">{book.authors.toString()}</div>)} // on search the book list has author as undefined hence provided a check
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookShelf
