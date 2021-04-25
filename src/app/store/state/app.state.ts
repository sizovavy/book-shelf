import { IBookState, initialBookState } from "./book.state";

export interface IAppState {
    books: IBookState
}

export const initialAppState: IAppState = {
    books: initialBookState
}

export function getInitialState(): IAppState{
    return initialAppState
}