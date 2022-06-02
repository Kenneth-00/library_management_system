import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from './users';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string = "http://localhost:8080/databaseConnection";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {  
    this.adminviewBooks();
  }
  
  userlogin(email: any, password: any){
    return this.httpClient.post<Users[]>(this.baseUrl + '/login.php', { email, password})
    .pipe(map(Users => {
      this.setToken(Users[0].email);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  userregistration(name: any, email: any, password: any, confirmpassword: any, role: any): Observable<any>{
    return this.httpClient.post<Users[]>(this.baseUrl + '/register.php', {name, email, password, confirmpassword, role})
  }

  viewUsers(): Observable<any> {
    return this.httpClient.get<Users[]>(this.baseUrl + '/viewUsers.php');

  }

  addBook(book_title: any, authors: any, date_published: any, category: any, quantity: any, status: any): Observable<any> {
    return this.httpClient.post<Books[]>(this.baseUrl + '/addBook.php', {book_title, authors, date_published, category, quantity, status})

  }

  adminviewBooks() {
    return this.httpClient.get<Books[]>(this.baseUrl + '/viewBook.php');
  }

  updateBook(book_title: any, authors: any, date_published: any, category: any, quantity: any, status: any) : Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + '/updateBook.php', {book_title, authors, date_published, category, quantity, status});
  }

  userviewBooks() {
    return this.httpClient.get<Books[]>(this.baseUrl + '/viewBook.php');
  }

  borrowBook(bookAdded:any): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + '/borrowBook.php', {bookAdded});
  }

  getBookDetail(id:number) {
    return this.httpClient.get<any>(this.baseUrl + '/viewBook.php?book_id=' + id);

  }

  deleteBook(book_id:number) {
    return this.httpClient.delete<Books[]>(this.baseUrl + '/deleteBook.php' + book_id);
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return true
  }
}
