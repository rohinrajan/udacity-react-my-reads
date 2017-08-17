import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    const books = BooksAPI.getAll()
    return(
      <div>
        { console.log(books) }
      </div>
    )
  }
}

export default BooksApp
