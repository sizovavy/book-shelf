import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LocalStorageService } from "src/app/local-storage.service";
import { switchMap, tap, map } from "rxjs/operators";
import { AddBookRequested, AddBookSuccess, GetAllBooksRequested, GetAllBooksSuccess, RemoveBookRequested, 
    RemoveBookSuccess, UpdateBookRequested, UpdateBookSuccess, } from "../actions/book.actions";
import { of } from "rxjs";

@Injectable()

export class BookEffects {
    constructor(private readonly actions$: Actions, private readonly storageService: LocalStorageService){}
   
    addBook$ = createEffect(()=> this.actions$.pipe(
        ofType(AddBookRequested),
        tap((book) =>  this.storageService.addBook(book)),
        switchMap((book) => of(AddBookSuccess(book)))
       )
    );

   getAllBooks$ = createEffect(()=> this.actions$.pipe(
        ofType(GetAllBooksRequested),
        map(() => this.storageService.getAllBooks()),
        switchMap((books) => of(GetAllBooksSuccess({books})))
        )
    );

    deleteBook$ = createEffect(()=> this.actions$.pipe(
        ofType(RemoveBookRequested),
        tap((book) => this.storageService.deleteBook(book)),
        switchMap((book) => of(RemoveBookSuccess(book)))
        )
    );
    updateBook$ = createEffect(()=> this.actions$.pipe(
        ofType(UpdateBookRequested),
        tap((book) => this.storageService.updateBook(book)),
        switchMap((book) => of(UpdateBookSuccess(book)))
        )
    )
   
}
