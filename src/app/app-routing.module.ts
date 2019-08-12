import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import {RegisterComponent} from './components/users/register/register.component';
import { HomeComponent } from './home/home.component';
import { ConfirmRegisterComponent } from './components/users/confirm-register/confirm-register.component';
import { BookComponent } from './components/book/create-book/create-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { BooksComponent } from './components/book/books/books.component';
import { BookDisabledListComponent } from './components/book/book-disabled-list/book-disabled-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'user',
    component: HomeComponent,
  },
  {
    path: 'confirmCode',
    component: ConfirmRegisterComponent,
  },
  {
    path: 'createBook',
    component: BookComponent
  },
  {
    path: 'editBook/:id',
    component: EditBookComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'bookDisableList',
    component: BookDisabledListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
