import React, { Component } from 'react'
import './App.css'

class SearchBook extends Component {

  state = {
    query : '',
    searchList : [],
    isSearchDisplay : false
  }

  onUpdateQuery(value){
    this.setState({
      query : value.trim()
    })
    this.props.onSearchResult(this.state.query).then((book)=>
      
    )
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {
              /*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              Yo  u can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
            }
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=> this.onUpdateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.isSearchDisplay && this.state.searchList.map((book)=> (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover"
                      style={{ width: 128, height: 192,
                        backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.toString()}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
