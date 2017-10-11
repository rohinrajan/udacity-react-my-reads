import React from 'react'
import './App.css';
/*
 stateless functional component to display a book
*/
function Book(props){
  var book_authors = "NA";
  if(props.book.authors){
    book_authors = props.book.authors.join(', ')
  }
  var book_thumbnail = "http://via.placeholder.com/128x193?text=No%20Cover";
  if(props.book.imageLinks){
    book_thumbnail = props.book.imageLinks.thumbnail
  }
  return (
    <div className="book">
      <div className="book-top">
      <div className="book-cover"
        style={{ width: 128, height: 192,
          backgroundImage: `url(${book_thumbnail})`}}>
        </div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf} onChange={(e) => props.updateBookShelf(props.book,e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{book_authors}</div>
    </div>
  )
}

export default Book
