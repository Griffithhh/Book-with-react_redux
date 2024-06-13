import {useDispatch, useSelector} from "react-redux";
import {BsBookmarkStarFill, BsBookmarkStar} from "react-icons/bs";
import './BookList.css'
import {removeBook, toggleFavorite} from "../../redux/books/actionCreators";
import {selectTitleFilter, selectAuthorFilter} from "../../redux/slices/filterSlice";

const BookList = () => {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const dispatch = useDispatch()

const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
}
const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    if( matchesAuthor && matchesTitle){
        return true
    }
})


  return (
    <div className="app-block book-list">
     <h2>Book List</h2>
        {books.length === 0 ? ( <p>No books available</p>) : (
            <ul>{filteredBooks.map((book, i)=>
            <li key={book.id}>
                <div className="book-info"> {++i}. {book.title} by <strong>{book.author}</strong></div>
                <div className="book-actions">
                    <span onClick={()=> handleToggleFavorite(book.id) } > {book.isFavorite ? (
                        <BsBookmarkStarFill className="star-icon" />
                    ) : ( <BsBookmarkStar  className="star-icon" />)}  </span>

                    <button onClick={()=>{dispatch(removeBook(book.id))}}> Delete</button></div>

        </li>
        )}
        </ul>
        )}
    </div>
  );
};

export default BookList;