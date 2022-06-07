import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Users } from './users';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string = "http://localhost:8080/databaseConnection";
  handleError:any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {  
    this.adminviewBooks();
  }

  // <------------ global methods -------------->
  
  userlogin(email: any, password: any){
    return this.httpClient.post<Users[]>(this.baseUrl + '/login.php', { email, password})
    .pipe(map(Users => {
      this.setToken(Users[0].email);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  deleteBook(id:number) {
    return this.httpClient.delete<Books[]>(this.baseUrl + '/deleteBook.php?book_id=' + id);
  }


  //<------------- admin methods -------------->

  adminviewBooks() {
    return this.httpClient.get<Books[]>(this.baseUrl + '/viewBook.php');
  }
  
  loadBookInfoById(id:any): Observable<Books> {
    return this.httpClient.get<Books>(this.baseUrl + '/viewBookDetail.php?id=' + id).pipe(map(data=>data));
  }

  addBook(book_title: any, authors: any, date_published: any, category: any, quantity: any, status: any): Observable<any> {
    return this.httpClient.post<Books[]>(this.baseUrl + '/addBook.php', {book_title, authors, date_published, category, quantity, status})
  }

  updateBook(data:any, id:number) : Observable<Books[]> {
    return this.httpClient.put<Books[]>(this.baseUrl + '/updateBook.php',{data, id});
  }

  viewRequests(){
    return this.httpClient.get<Books[]>(this.baseUrl + '/requests.php');
  }

  userregistration(name: any, email: any, password: any, confirmpassword: any, role: any): Observable<any>{
    return this.httpClient.post<Users[]>(this.baseUrl + '/register.php', {name, email, password, confirmpassword, role})
  }

  viewUsers(): Observable<any> {
    return this.httpClient.get<Users[]>(this.baseUrl + '/viewUsers.php');

  }

  deleteUser(id:number) {
    return this.httpClient.delete<Books[]>(this.baseUrl + '/deleteUser.php?id=' + id);
  }


  // <-------------user methods ---------------->

  userviewBooks() {
    return this.httpClient.get<Books[]>(this.baseUrl + '/viewBook.php');
  }

  borrowBook(bookAdded:any): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + '/borrowBook.php', {bookAdded});
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
