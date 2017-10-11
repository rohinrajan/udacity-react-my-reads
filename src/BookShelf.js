import React from 'react'
import './App.css'
import Book from './Book'

function BookShelf(props){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.book_title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.bookList.map((book)=> (
            <li key={book.id}>
              <Book book={book} updateBookShelf={props.updateBookShelf}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}


export default BookShelf
