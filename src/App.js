/*
*  Starter Code for the React MyReads Project
*  https://github.com/udacity/reactnd-project-myreads-starter
*/

import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import './App.css'




class BooksApp extends React.Component {
	state = {
    	books: []   // Component's state: collection of book objects 
                    // currently in the bookshelves  
  	}

    // Returns the books currently 
    // in the bookshelves  
  	componentDidMount() {
    	BooksAPI.getAll().then((books) => {
      		this.setState({books});
    	})
  	} 
 
	// Moves the (new) book to its destination 
    // bookshelf
   	moveBook = ( destinationBookshelf, book ) => {
      
      	// Does something    
    }
 
  	render() { 
       
        // Represents the possible bookshelves to which books can belong.
		const bookShelves = [ { shelfID: 'currentlyReading', bookshelfName: 'Currently Reading' },
							  { shelfID: 'wantToRead', bookshelfName: 'Want to Read' },
            	              { shelfID: 'read', bookshelfName: 'Read' } ];
 
    	return (
        	
          	<div className="app">
          
            { /* Creating a route.. */ }
      		<Route exact path="/" render={ () => (
      
      			<div className="list-books">
          			<div className="list-books-title">
            			<h1>MyReads</h1>
          			</div>
          			<div className="list-books-content">
            			<div>
             				{    // Each shelf...
               					 bookShelves.map((shelfName, index) => {
          
                                    // ...contains several books (look at the 'shelf' attribute in the 'book' object)  
                  					const booksInTheShelf = this.state.books.filter(book => book.shelf === shelfName.shelfID) 
                  						return ( 
                                            // 'BookShelf' component 
                                            //
                                            // Passing to the 'BookShelf' component only books that belongs to the respective 
                                            // bookshelf
                    						<BookShelf 
                    							key={shelfName.shelfID}
                    							books={booksInTheShelf}     
                                                shelfName={shelfName.bookshelfName}
                                                onBookMove={this.moveBook}
                    						/>);  
               						 })
             				}	
            			</div>
          			</div>   { /* Div element with 'className=list-book-content' */ }
      			</div>
      		)}/> { /* Route with path '/' */ }
    	</div>)    
  	}
}

export default BooksApp