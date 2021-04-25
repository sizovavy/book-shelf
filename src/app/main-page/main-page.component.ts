import { EditBookModal } from '../modal/edit-book/edit-book.modal';
import { ModalService } from '../modal/modal.service';
import { Component, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent { 
  @Input() content:IBook;
  
  constructor( private readonly sservice: ModalService ) {}
    
  public open() {
      this.sservice.open(EditBookModal,{isUpdating: false},()=>{},()=>{return;})

  } 

}
