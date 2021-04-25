import { EditBookModal } from './modal/edit-book/edit-book.modal';
import { BookEffects } from './store/effects/book.effects';
import { appReducers } from './store/reducers/app.reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RemovingWarningModal } from './modal/removing-warning/removing-warning.modal';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    MainPageComponent,
    BookDetailComponent,
    EditBookModal,
    RemovingWarningModal
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
