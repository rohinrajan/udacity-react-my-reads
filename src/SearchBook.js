import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

class SearchBook extends Component {

  state = {
    query : '',
    searchList : [],
    isSearchDisplay : false
  }

  static propTypes = {
    onSearchResult : PropTypes.func.isRequired,
    currentBookList : PropTypes.array.isRequired,
    appendCurrentBookToList : PropTypes.func.isRequired
  }

  onUpdateQuery(value){
    this.setState({
      query : value.trim()
    })
    this.searchForBooks()
  }

  searchForBooks(){
    this.props.onSearchResult(this.state.query).then((book)=> {
        if(typeof book === "undefined" || book.error){
          this.setState({
            searchList: [],
            isSearchDisplay : false
          })
        }
        else{
          this.setState({
            searchList: this.appendBookShelfStatus(book),
            isSearchDisplay : true
          })
        }
      })
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

  onUpdateSearchBookShelf(sbook,newUpdatedShelf){
    this.props.appendCurrentBookToList(sbook,newUpdatedShelf);
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=> this.onUpdateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.isSearchDisplay && this.state.searchList.map((book)=> (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    {typeof book.imageLinks !== "undefined" && (<div className="book-cover"
                      style={{ width: 128, height: 192,
                        backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>)}
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(e)=>this.onUpdateSearchBookShelf(book,e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  { typeof book.authors !== "undefined" && (<div className="book-authors">{book.authors.toString()}</div>)}
                </div>
              </li>
            ))}
            { !this.state.isSearchDisplay && (<li> No Results Found </li>) }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
