import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {


 static propTypes = {
   books : PropTypes.array.isRequired,
   displayList : PropTypes.bool.isRequired,
   updateBookShelf : PropTypes.func.isRequired
 }

 bookShelfHandler = (book, updatedShelf) => {
   this.props.updateBookShelf(book, updatedShelf)
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
            <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { displayList && (<BookShelf bookList={currentreading} book_title="Currently Reading" updateBookShelf={this.bookShelfHandler}/>)}
            { displayList && (<BookShelf bookList={wantToRead} book_title="Want to Read" updateBookShelf={this.bookShelfHandler}/>)}
            { displayList && (<BookShelf bookList={read} book_title="Read" updateBookShelf={this.bookShelfHandler}/>)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"
            >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
