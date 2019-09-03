import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Location } from '@angular/common';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  comments: Comment[];
  message: string;
  user: User;
  comment: Comment;
  token: string;
  editId: number;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private commentService: CommentService,
    private userService: UserService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.editId=-1;
    this.token = this.tokenService.getToken();
    this.getBook();
    this.userService.getUser().subscribe(user => this.user = user);
  }

  getBook():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
    this.commentService.getComment(id).subscribe((cmt:any)  => this.comments = cmt) 
  }

  postComment():void{
    const body={
      message: this.message,
      book: this.book
    }

    this.httpClient.post('https://bookmanagerment.herokuapp.com/api/books/comments', body).subscribe((comment:any)=> {
      this.comment = comment;
      this.commentService.getComment(this.book.id).subscribe((comment:any) => this.comments=comment)
      this.message = ""; 
    });
  }

  delete(id: number){
    let param = new HttpParams().set('id',id+"");
    this.httpClient.delete('https://bookmanagerment.herokuapp.com/api/books/comments',{params:param}).subscribe(resp => {
      this.getBook();
    });
  }

  setEditId(id: number){
    this.editId=id;
  }

  saveEdit(comment: Comment){
    const body={
      id : comment.id,
      message: comment.message,
      book: comment.book
    }
    this.httpClient.put('https://bookmanagerment.herokuapp.com/api/books/comments', body).subscribe((comments:any)=>
    {
      this.comments=comments;
      this.editId=-1;
    })
  }
}

