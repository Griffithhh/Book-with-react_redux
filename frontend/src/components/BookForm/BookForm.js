import {useState} from "react";
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    // const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && author ){

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

        </form>
    </div>
  );
};

export default BookForm;