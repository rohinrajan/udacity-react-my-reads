import React, { Component } from 'react'
import './App.css'

class ListBooks extends Component {
 state = {

 }

  render(){
    const {books, displayList, updateBookShelf} = this.props
    // console.log(books)
    const currentreading = books.filter((book) => (book.shelf === "currentlyReading"))
    const wantToRead = books.filter((book) => (book.shelf === "wantToRead"))
    const read = books.filter((book) => (book.shelf === "read"))
    return (
      <div className="list-books">
        <div className="list-books-title">
            <h1>"In Progress"</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { displayList && currentreading.map((book)=> (
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
                        <div className="book-authors">{book.authors.toString()}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { displayList && wantToRead.map((book)=> (
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
                        <div className="book-authors">{book.authors.toString()}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { displayList && read.map((book)=> (
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
                        <div className="book-authors">{book.authors.toString()}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
