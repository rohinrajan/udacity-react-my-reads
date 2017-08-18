import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  listBooks = () => {
    BooksAPI.getAll().then((books) =>
      (this.state.books.length !== books.length) && this.setState(
        { books }
      )
    )
  }


  render(){
    this.listBooks()
    return(
      <div>
      {this.state.books.map((bookData) => (
        <li>
            <div className="book-cover" style = {{ width: 128, height: 193, backgroundImage: `url(${bookData.imageLinks.thumbnail})`}} />
        </li>
      ))}
      </div>
    )
  }
}

export default BooksApp


// Object { title: "React", subtitle: "Die praktische Einführung in React,…", authors: Array[2], publisher: "dpunkt.verlag", publishedDate: "2016-07-07", description: "React ist ein JavaScript-Framework …", industryIdentifiers: Array[2], readingModes: Object, pageCount: 342, printType: "BOOK", 12 more… }
