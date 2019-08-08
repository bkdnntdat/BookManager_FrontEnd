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
import { BookComponent } from './components/book/book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from 'primeng/editor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ConfirmRegisterComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
