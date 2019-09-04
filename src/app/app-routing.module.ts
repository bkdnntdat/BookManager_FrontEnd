import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import {RegisterComponent} from './components/users/register/register.component';
import { HomeComponent } from './home/home.component';
import { ConfirmRegisterComponent } from './components/users/confirm-register/confirm-register.component';
import { BookComponent } from './components/book/create-book/create-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { BooksComponent } from './components/book/books/books.component';
import { BookDisabledListComponent } from './components/book/book-disabled-list/book-disabled-list.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { MyListBookComponent } from './components/book/my-list-book/my-list-book.component';
import { BooksUserComponent } from './components/book/books-user/books-user.component';
import { UserComponent } from './components/users/user/user.component';
import { UserManagerComponent } from './components/users/user-manager/user-manager.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/books',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
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
    path: 'books-admin',
    component: BooksComponent
  },
  {
    path: 'bookDisableList',
    component: BookDisabledListComponent
  },
  {
    path: 'bookDetail/:id',
    component: BookDetailComponent
  },
  {
    path: 'my-books',
    component: MyListBookComponent
  },
  {
    path: 'books',
    component: BooksUserComponent
  },
  {
    path: 'profile/:id',
    component: UserComponent
  },
  {
    path: 'user-manager',
    component: UserManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
