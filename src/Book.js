import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired,         // All the books!
        book: PropTypes.object.isRequired,         // Contains data of a book 
        moveBook_to: PropTypes.func.isRequired         // The function to 'move' a book to another shelf  
 	}

	render() {
      	// Destructuring props..
        // https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477
      	const {books, book, moveBook} = this.props;     
    		 
      	return (
      		<li>
             	<div className="book">
             		<div className="book-top">
             			<div className="book-cover"></div>             			
             			
             		</div>  
             		<div className="book-title">{book.title}</div>
             		<div className="book-authors">{book.authors}</div>
             	</div> 
            </li>   	 
   		)
 	}
}

export default Book