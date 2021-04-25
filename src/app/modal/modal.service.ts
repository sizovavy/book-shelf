import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { IEditBookOptions } from "./edit-book/edit-book-options";

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    ngbModalRef: NgbModalRef;
    constructor(private modalService: NgbModal,){}

    public open(component, options: IEditBookOptions, onClose?, onDismiss?){       
        
        this.ngbModalRef =  this.modalService.open(component, {
                                                                ariaLabelledBy: 'modal-basic-title',
                                                                keyboard: false, 
                                                                backdrop: "static"
                                                            })
        
        this.ngbModalRef.result.then(onClose, onDismiss)

        const componentInstance = this.ngbModalRef.componentInstance;
        
        if(options.book) {
            componentInstance.isUpdating = options.isUpdating ? true : false;
            componentInstance.currentId = options.book.id;
            componentInstance.profileForm.setValue({
            author: options.book.author,
            publishDate: options.book.publishDate,
            name: options.book.name,
            pageNumber: options.book.pageNumber
        })}
    }

    public close(){
        this.ngbModalRef.close()
    }

    public dismiss(){
        this.ngbModalRef.dismiss()
    }

}