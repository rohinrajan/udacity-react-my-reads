import React, { Component } from 'react'
import './App.css'
class ListBooks extends Component {
 state = {
   display : 'false'
 }

  render(){
    const {books, displayList} = this.props
    console.log(books)

    return (
      <ol>
        { displayList && books.map((book)=> (
          <li key={book.id}> {book.title} </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks
