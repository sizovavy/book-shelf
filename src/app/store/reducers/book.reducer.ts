import { AddBookRequested, AddBookSuccess, GetAllBooksRequested, GetAllBooksSuccess, RemoveBookRequested, 
    RemoveBookSuccess, UpdateBookRequested, UpdateBookSuccess } from './../actions/book.actions';

import { createReducer, on } from "@ngrx/store";

import { initialBookState } from "../state/book.state"

export const bookReducers = createReducer(
  initialBookState,
  on(AddBookRequested,  (state, ) => ({ ...state })),
  on(AddBookSuccess,  (state, book ) => ({ books: [...state.books, book ]})),
  on(GetAllBooksRequested, (state, ) => ({ ...state }) ),
  on(GetAllBooksSuccess,(_state, { books }) => ({ books })),
  on(RemoveBookRequested, (state,) => ({ ...state })),
  on(RemoveBookSuccess, (state,  book ) => ( { books: [...state.books.filter(item => item.id !== book.id) ]} )),
  on(UpdateBookRequested, (state,) => ({ ...state })),
  on(UpdateBookSuccess, (state, book) => (  { books: [...state.books.map(item => item.id === book.id ? book : item) ]})),
);

