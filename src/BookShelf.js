import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired,
      	onBookMove: PropTypes.func.isRequired        
 	}

	render() {       
      	// Destructuring props..
        // https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477
      	const {books, shelfName, onBookMove} = this.props;     
 
      	return (
     		<div className="bookshelf">
             	<h2 className="bookshelf-title">{shelfName}</h2>
             	<div className="bookshelf-books">
             		<ol className="books-grid">
						{
           					// Passing down the books array,
                            // each single book that belongs to the 'shelfName' bookshelf
          					// and the 'onBookMove' method to handle books relocation
                          	books.map((book) => (
                          		<Book
                          			books={books}
									book={book}
          							key={book.id} 
          							onBookMove={onBookMove}
								/>
							))                    
                	    }             		 
             		</ol>             
             	</div>
     		</div>
   		)
 	}
}

export default BookShelf