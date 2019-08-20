import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private urlApi = "http://localhost:8080/book";

  constructor(private httpClient:HttpClient) { }

  getBook(id:number): Observable<Book>{
    const url = `${this.urlApi}/${id}`;
    return this.httpClient.get<Book>(url).pipe();
  }

  getBooks(enabled: Boolean): Observable<Book[]>{
    let param = new HttpParams().set('enabled',enabled+"");
    return this.httpClient.get<Book[]>(this.urlApi, {params:param}).pipe();
  }

  getMyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.urlApi}/user`).pipe();
  }

  updateBook(book: Book): Observable<any>{
    return this.httpClient.put(this.urlApi, book).pipe();
  }

  updateBooks(books: Book[]): Observable<any>{
    return this.httpClient.put(`${this.urlApi}/books`, books).pipe();
  }

  deleteBook(id: number): Observable<any>{
    let param = new HttpParams().set('id',id+"");
    return this.httpClient.delete(this.urlApi, {params: param}).pipe();
  }
}
