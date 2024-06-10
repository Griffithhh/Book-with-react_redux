import * as a from './actionTypes';
export const addBook = (newBook) => {
    return {
        type: 'ADD_BOOK',
        payload: newBook
    }
}