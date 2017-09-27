import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books : [],
    displayList : false,
    displaySearch : false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>
      (this.state.books.length !== books.length) && this.setState(
        { books, displayList : true }
      )
    )
  }


  onUpdateBooks = (book, updatedShelf) => {
    if(book.shelf !== updatedShelf){
      BooksAPI.update(book, updatedShelf)
      book.shelf = updatedShelf
      this.setState(prevState => ({
        books: prevState.books.filter((b) => b.id !== book.id).concat([book])
      }))
    }
  }

  searchBook = (searchQuery) => {
    return BooksAPI.search(searchQuery,20)
  }


  render(){
    return(
      <div>
        <Route exact path="/" render={ () => (
          <ListBooks books={this.state.books} displayList={this.state.displayList}
            updateBookShelf={this.onUpdateBooks}/>
        )}/>
        <Route path="/search" render={ () => (
          <SearchBook onSearchResult={this.searchBook}
            currentBookList={this.state.books}
            appendCurrentBookToList={this.onUpdateBooks}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp


// Object { title: "React", subtitle: "Die praktische Einführung in React,…", authors: Array[2], publisher: "dpunkt.verlag", publishedDate: "2016-07-07", description: "React ist ein JavaScript-Framework …", industryIdentifiers: Array[2], readingModes: Object, pageCount: 342, printType: "BOOK", 12 more… }
