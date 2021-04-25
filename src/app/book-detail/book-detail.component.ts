import { EditBookModal } from '../modal/edit-book/edit-book.modal';
import { ModalService } from './../modal/modal.service';
import { IBook } from './../book';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IAppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { RemoveBookRequested } from '../store/actions/book.actions';
import { RemovingWarningModal } from '../modal/removing-warning/removing-warning.modal';

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: [ './book-detail.component.css' ]
  })
  export class BookDetailComponent {
    @Input() book: IBook;

    constructor(private readonly store: Store<IAppState>, 
        private readonly modalService: ModalService){}

    public removeBook(book: IBook): void {

        this.modalService.open(RemovingWarningModal,{},()=>this.store.dispatch(RemoveBookRequested(book)),()=>{})        
        
    }

    public editBook(book: IBook): void {       

        this.modalService.open(EditBookModal,{
            isUpdating: true, 
            book,},()=>{},()=>{return;})
    }



  }