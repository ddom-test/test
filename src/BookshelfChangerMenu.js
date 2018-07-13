import React from 'react'
import PropTypes from 'prop-types'

class BookshelfChangerMenu extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired,         // Collection of books contained in one of the bookshelves
        book: PropTypes.object.isRequired,         // Contains data of a book 
        onBookMove: PropTypes.func.isRequired         // Function to 'move' a book to another shelf  
 	}

	render() {
      	// Destructuring props..
        // https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477
      	const {books, book, moveBook} = this.props;     		
    		 
      	return (
        	<div className="book-shelf-changer">
         		 <select>
                 	<option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                 </select>
          	</div>
   		)
 	}
}

export default BookshelfChangerMenu