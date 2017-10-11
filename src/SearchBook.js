import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BookShelf from './BookShelf'

class SearchBook extends Component {

  state = {
    query : '',
    searchList : [],
    displaySearchResults : false
  }

  static propTypes = {
    onSearchResult : PropTypes.func.isRequired,
    currentBookList : PropTypes.array.isRequired,
    appendCurrentBookToList : PropTypes.func.isRequired
  }

  onUpdateQuery(value){
    this.setState({
      query : value
    }, () => this.searchForBooks(this.state.query))
  }

  resetSearchList(){
    this.setState({
      searchList: [],
      displaySearchResults : false
    })
  }

  searchForBooks(searchquery){
    if(searchquery){
      this.props.onSearchResult(searchquery).then((book)=> {
          if(typeof book === "undefined" || book.error){
            this.resetSearchList()
          }
          else{
            this.setState({
              searchList: this.appendBookShelfStatus(book),
              displaySearchResults : true
            })
          }
        })
    }
    else{
      this.resetSearchList()
    }
  }

 /*
  function to apeend the current book shelf status on each book
 */
  appendBookShelfStatus(searchBooks){
    var currentBookList = this.props.currentBookList;
    var updatedResponseBookList = searchBooks.map((sBook) => {
      sBook.shelf = "none";
      currentBookList.forEach((cBook) => {
        if(cBook.id === sBook.id){
          sBook.shelf = cBook.shelf;
          return;
        }
      })
      return sBook; // returning to appended to the updatedResponseBookList
    });

    // console.log(updatedResponseBookList);
    return updatedResponseBookList
  }

  onUpdateSearchBookShelf = (sbook,newUpdatedShelf) => {
    this.props.appendCurrentBookToList(sbook,newUpdatedShelf)
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=> this.onUpdateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          { this.state.displaySearchResults && (<BookShelf bookList={this.state.searchList} book_title="Search Results" updateBookShelf={this.onUpdateSearchBookShelf}/>)}
          { !this.state.displaySearchResults && <p>No Results Found</p>}
        </div>
      </div>
    )
  }
}

export default SearchBook
