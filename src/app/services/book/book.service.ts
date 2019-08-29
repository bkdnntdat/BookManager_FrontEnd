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

  private urlApi = "http://localhost:8080/api/books";

  constructor(private httpClient:HttpClient) { }

  getBook(id:number): Observable<Book>{
    const url = `${this.urlApi}/${id}`;
    return this.httpClient.get<Book>(url).pipe();
  }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.urlApi).pipe();
  }

  getDisableBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.urlApi+"/disable-books").pipe();
  }

  getMyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.urlApi}/user`).pipe();
  }

  updateBook(book: Book): Observable<any>{
    return this.httpClient.put(this.urlApi, book).pipe();
  }

  updateBookEnable(id:number): Observable<any>{
    return this.httpClient.put(`${this.urlApi}/enable`, id).pipe();
  }

  updateBookDisable(id: number):Observable<any>{
    const body = {
      id : id
    }
    return this.httpClient.put(`${this.urlApi}/disable`,id).pipe();
  }

  deleteBook(id: number): Observable<any>{
    let param = new HttpParams().set('id',id+"");
    return this.httpClient.delete(this.urlApi, {params: param}).pipe();
  }
}
