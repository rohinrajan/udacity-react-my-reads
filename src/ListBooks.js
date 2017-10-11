import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props){
  const {books, displayList, updateBookShelf} = props;
  // console.log(books)
  const currentreading = books.filter((book) => (book.shelf === "currentlyReading"));
  const wantToRead = books.filter((book) => (book.shelf === "wantToRead"));
  const read = books.filter((book) => (book.shelf === "read"));
  return (
    <div className="list-books">
      <div className="list-books-title">
          <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { displayList && (<BookShelf bookList={currentreading} book_title="currently Reading" updateBookShelf={updateBookShelf}/>)}
          { displayList && (<BookShelf bookList={wantToRead} book_title="Want to Read" updateBookShelf={updateBookShelf}/>)}
          { displayList && (<BookShelf bookList={read} book_title="Read" updateBookShelf={updateBookShelf}/>)}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"
          >Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks
