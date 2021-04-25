import { ModalService } from '../modal.service';
import { Component } from "@angular/core";
import { IBook } from '../../book';

@Component({
    templateUrl: './removing-warning.modal.html',
  })
  export class RemovingWarningModal {

    book: IBook;

    constructor(
      private readonly modalService: ModalService){}
  
    public approved(){
      this.modalService.close()

    }

    public canceled(){
      this.modalService.dismiss()
    }
  }