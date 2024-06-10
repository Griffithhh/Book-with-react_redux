
import {v4 as uuid} from 'uuid';
const createBookWithID = (book) => {
    return {
        ...book,
        isFavorite: false,
        id: uuid()
    }
}
export default createBookWithID;