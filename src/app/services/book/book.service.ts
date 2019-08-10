import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private urlApi = "http://localhost:8080/book";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient:HttpClient) { }

  getBook(id:number): Observable<Book>{
    const url = `${this.urlApi}/${id}`;
    return this.httpClient.get<Book>(url).pipe();
  }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.urlApi).pipe();
  }

  updateBook(book: Book): Observable<any>{
    return this.httpClient.put(this.urlApi, book).pipe();
  }
}
