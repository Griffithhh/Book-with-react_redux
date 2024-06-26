import {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addBook} from "../../redux/slices/booksSlice";
import createBookWithID from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'
const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    // const [formData, setFormData] = useState({})


    const dispatch = useDispatch()


   const handleAddRandomBook = () =>{
    const randomIndex = Math.floor(Math.random() * booksData.length)
       const randomBook = booksData[randomIndex];
    const randomBookWithID = createBookWithID(randomBook);
    dispatch(addBook(randomBookWithID))
    }
    const handleSubmit = (e) =>     {
        e.preventDefault()
        if(title && author ){
        const book = createBookWithID({title, author});
        dispatch(addBook(book))
            setTitle('')
                setAuthor('')
        }
        //dispatch action
    }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="title">Author:</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
         <button type="submit">Add Book</button>
            <button type="button" onClick={handleAddRandomBook}>Add Random</button>

        </form>
    </div>
  );
};

export default BookForm;