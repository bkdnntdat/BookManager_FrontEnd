import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/users/register/register.component';
import { HomeComponent } from './home/home.component';
import { ConfirmRegisterComponent } from './components/users/confirm-register/confirm-register.component';
import { BookComponent } from './components/book/create-book/create-book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { BooksComponent } from './components/book/books/books.component';
import { BookDisabledListComponent } from './components/book/book-disabled-list/book-disabled-list.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {MatTableModule} from '@angular/material/table';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ConfirmRegisterComponent,
    BookComponent,
    EditBookComponent,
    BooksComponent,
    BookDisabledListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    EditorModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    TableModule,
    MatTableModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
