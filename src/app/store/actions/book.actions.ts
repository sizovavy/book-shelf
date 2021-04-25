import { createAction, props } from "@ngrx/store";
import { IBook } from "src/app/book";

export const AddBookSuccess = createAction(
    '[Books] Add Book Succeded',
    props<IBook>()
  );

export const AddBookRequested = createAction(
    '[Books] Add Book requested',
    props<IBook>()
  );
  export const GetAllBooksRequested = createAction(
    '[Books] Get All Book requested',    
  );
  export const GetAllBooksSuccess = createAction(
    '[Books] Get All Books succeeded',
    props<{books: IBook[]}>()
  );
  export const RemoveBookRequested = createAction(
    '[Books] Remove Book requested', 
    props<IBook>()   
  );
  export const RemoveBookSuccess = createAction(
    '[Books] Remove Book succeeded',
    props<IBook>()
  );
  export const UpdateBookRequested = createAction(
    '[Books] Update Book requested', 
    props<IBook>()   
  );
  export const UpdateBookSuccess = createAction(
    '[Books] Update Book succeeded',
    props<IBook>()
  );

