import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlApi="http://localhost:8080/api/books/comments"

  constructor(private httpClient: HttpClient) { }

  getComment(id:number): Observable<Comment[]>{
    let param = new HttpParams().set('id',id+"");
    return this.httpClient.get<Comment[]>(this.urlApi, {params:param}).pipe();
  }
}
