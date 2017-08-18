import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  listBooks = () => {
    BooksAPI.getAll().then((books) =>
      this.setState(
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
          <div>
            <p> Title:  { bookData.title } </p>
            <p> subtitle : { bookData.subtitle } </p>
            <p> publisher: { bookData.publisher } </p>
            <p> publishedDate:  { bookData.publishedDate } </p>
            <p> description: { bookData.description } </p>
          </div>
        </li>
      ))}
      </div>
    )
  }
}

export default BooksApp


// Object { title: "React", subtitle: "Die praktische Einführung in React,…", authors: Array[2], publisher: "dpunkt.verlag", publishedDate: "2016-07-07", description: "React ist ein JavaScript-Framework …", industryIdentifiers: Array[2], readingModes: Object, pageCount: 342, printType: "BOOK", 12 more… }
