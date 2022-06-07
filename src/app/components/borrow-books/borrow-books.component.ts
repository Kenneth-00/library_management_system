import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-borrow-books',
  templateUrl: './borrow-books.component.html',
  styleUrls: ['./borrow-books.component.scss']
})
export class BorrowBooksComponent implements OnInit {
  
  book: Books[];
  bookAdd: any = [];
  bookToAdd: any;
  
  constructor(private dataService: ApiService) { 
    this.userviewBookDetails();
  }

  ngOnInit(): void {
  }

  userviewBookDetails(){
    this.dataService.userviewBooks()
    .subscribe(
      (response) => {
        this.book = response;
      }
    );
  }

  add(bookAdded:any){
    this.bookToAdd = bookAdded;
    this.dataService.borrowBook(bookAdded)
    .subscribe((response:any)=>{
      console.log(response);
    })
    console.log(this.bookToAdd);
  }

  delete(deleteBook:any){
    this.dataService.deleteBook(deleteBook.book_id)
    .subscribe((response:any) => {
      console.log(response);
      this.userviewBookDetails();
    })
  }



}
