import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm:FormGroup;

  book: Books[];

  constructor(private formBuilder: FormBuilder,private dataService: ApiService,private router:Router) {
    this.addBookForm = this.formBuilder.group({
      book_title: ['', [Validators.required]],
      authors: ['', [Validators.required]],
      date_published: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      status : ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
  }
  postdata(addBookForm: any)
  {
    this.dataService.addBook(
      addBookForm.value.book_title,
      addBookForm.value.authors,
      addBookForm.value.date_published,
      addBookForm.value.category,
      addBookForm.value.quantity,
      addBookForm.value.status
    )
    .subscribe( 
      (response) => {
        this.book = response;
        console.log(this.book);
        alert("Added Successfully!");
      }
    );
  }

  

  get book_title() { 
    return this.addBookForm.get('book_title');
  }

  get authors() { 
    return this.addBookForm.get('authors'); 
  }

  get date_published() { 
    return this.addBookForm.get('date_published'); 
  }

  get category() {
    return this.addBookForm.get('category');
  }

  get quantity() { 
    return this.addBookForm.get('quantity');
  }

  get status() { 
    return this.addBookForm.get('status');
  }

}

