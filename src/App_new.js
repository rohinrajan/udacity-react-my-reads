import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books : [],
    displayList : false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>
      (this.state.books.length !== books.length) && this.setState(
        { books, displayList : true }
      )
    )
  }


  onUpdateBooks = (values) => {
    var bookObj = BooksAPI.get(values.id)
    bookObj = BooksAPI.update(bookObj,values.self)
    var tmpBooks = this.state.books.filter((book) => book.id !== bookObj.id)
    this.setState({books: tmpBooks.concat([bookObj])})
  }


  render(){
    return(
      <div>
        <ListBooks books={this.state.books} displayList={this.state.displayList}
          updateBookShelf={this.onUpdateBooks}/>
      </div>
    )
  }
}

export default BooksApp


// Object { title: "React", subtitle: "Die praktische Einführung in React,…", authors: Array[2], publisher: "dpunkt.verlag", publishedDate: "2016-07-07", description: "React ist ein JavaScript-Framework …", industryIdentifiers: Array[2], readingModes: Object, pageCount: 342, printType: "BOOK", 12 more… }
