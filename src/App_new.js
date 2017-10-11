import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import ErrorPage from './ErrorPage'
import { Route, Switch } from 'react-router-dom'

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


  onUpdateBooks = (book, updatedShelf) => {
    BooksAPI.update(book, updatedShelf).then(() => {
          book.shelf = updatedShelf
          this.setState(prevState => ({
            books: prevState.books.filter((b) => b.id !== book.id).concat([book])
          }))
    })
  }

  searchBook = (searchQuery) => {
    return BooksAPI.search(searchQuery,20)
  }


  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={ () => (
            <ListBooks books={this.state.books} displayList={this.state.displayList}
              updateBookShelf={this.onUpdateBooks}/>
          )}/>
          <Route path="/search" render={ () => (
            <SearchBook onSearchResult={this.searchBook}
              currentBookList={this.state.books}
              appendCurrentBookToList={this.onUpdateBooks}/>
          )}/>
          <Route render={() => (<ErrorPage/>)}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
