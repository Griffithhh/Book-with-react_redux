import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const initialState = []


const booksReducer = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) =>{
            state.push(action.payload)
        },
        removeBook: (state, action) =>{
            return state.filter((book) => book.id !== action.payload)
        },
        toggleFavorite: (state, action) => {

            state.forEach((book)=>{
                if(book.id === action.payload){
                    book.isFavorite = !book.isFavorite
                }
            })
            // return state.map((book) =>
            // book.id === action.payload
            //     ? {...book, isFavorite: !book.isFavorite}
            //     : book
            //
            //
            // )
        }

    }

})
 export const selectBook = (state)=> state.books

export const {addBook, removeBook, toggleFavorite} = booksReducer.actions

export default  booksReducer.reducer