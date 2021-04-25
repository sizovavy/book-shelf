import { IBook } from "src/app/book";

export interface IBookState {
    books: Array<IBook>;
}

export const initialBookState: IBookState = {
    books: [],
}