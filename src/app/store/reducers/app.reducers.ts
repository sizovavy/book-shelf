import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { bookReducers } from "./book.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    books: bookReducers
}