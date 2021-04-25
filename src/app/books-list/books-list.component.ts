import { IBook } from './../book';
import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectBookList } from "../store/selectors/book.selector";
import { IAppState } from "../store/state/app.state";
import { GetAllBooksRequested } from '../store/actions/book.actions';


@Component({
    selector: 'books-list',
    templateUrl: './books-list.component.html',
  })
  export class BooksListComponent {
    books$ : Observable<IBook[]>

    constructor(private readonly store: Store<IAppState>){}

    ngOnInit(){
        this.store.dispatch(GetAllBooksRequested())
        this.books$ = this.store.pipe(select(selectBookList));
    }

  }