import { Injectable } from '@angular/core';
import { IBook } from './book';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public addBook(value: IBook): void {
      const key = value.id;
    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue);
  }

  public getAllBooks(): IBook[] {    
      let values: IBook[] = [],
          keys = Object.keys(localStorage),
          i = keys.length;

      while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) as IBook );
      }

      return values;
  }

  public deleteBook(book: IBook): void {    
    localStorage.removeItem(book.id);
}

public updateBook(book: IBook): void {    
  const key = book.id;
  const stringValue = JSON.stringify(book)
  localStorage.setItem(key, stringValue);
}
    
  public getItem(key: string){ 
    return localStorage.getItem(key)
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear(); 
  }
}