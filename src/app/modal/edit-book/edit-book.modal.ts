import { ModalService } from '../modal.service';
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AddBookRequested, UpdateBookRequested } from "../../store/actions/book.actions";
import { IAppState } from "../../store/state/app.state";
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'modal',
    templateUrl: './edit-book.modal.html',
  })
  export class EditBookModal {
  
    constructor(
      private readonly store: Store<IAppState>,
      private readonly modalService: ModalService) {}

  
    profileForm = new FormGroup({
      author: new FormControl('', Validators.required),
      publishDate: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      pageNumber: new FormControl('', Validators.required),
    });

    isUpdating: boolean = false;
    currentId: string;
  
    public submitForm(): void{
        const book = this.isUpdating ? {id: this.currentId, ...this.profileForm.value} : {id: uuidv4(), ...this.profileForm.value}
        this.isUpdating ? this.store.dispatch(UpdateBookRequested(book)) 
        : this.store.dispatch(AddBookRequested(book))
        this.modalService.close()
        this.profileForm.reset()  
    }
    
    public canceled(){
      this.modalService.dismiss()
    }

  }