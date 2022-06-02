import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  //editBookForm: FormGroup;

  book: Books[];
  //bookDetails: any = {};

  editBookForm = new FormGroup({
    book_title: new FormControl(''),
    authors: new FormControl(''),
    date_published: new FormControl(''),
    category: new FormControl(''),
    quantity: new FormControl(''),
    status : new FormControl('')
  })

  constructor(private formBuilder: FormBuilder,
    private dataService: ApiService,
    private router:Router,
    private activateRoute: ActivatedRoute) {

      this.editBookForm = this.formBuilder.group({
        book_title: ['', [Validators.required]],
        authors: ['', [Validators.required]],
        date_published: ['', [Validators.required]],
        category: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        status : ['', [Validators.required]]
      })
    }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.params['id']);
    this.dataService.getBookDetail(this.activateRoute.snapshot.params['id'])
      .subscribe((response:Books)=> {
        this.editBookForm = new FormGroup({
          book_title: new FormControl(response['book_title']),
          authors: new FormControl(response['authors']),
          date_published: new FormControl(response['date_published']),
          category: new FormControl(response['category']),
          quantity: new FormControl(response['quantity']),
          status : new FormControl(response['status'])
        })
      })
  }

  postdata(editBookForm: any) {
    this.dataService.updateBook(
      editBookForm.value.book_title,
      editBookForm.value.authors,
      editBookForm.value.date_published,
      editBookForm.value.category,
      editBookForm.value.quantity,
      editBookForm.value.status
    )
    .subscribe( 
      (response) => {
        this.book = response;
        console.log(this.book);
        alert("Added Successfully!");
      },
      error => {
        console.log(error);
      }
    );
  }

  get book_title() { 
    return this.editBookForm.get('book_title');
  }

  get authors() { 
    return this.editBookForm.get('authors'); 
  }

  get date_published() { 
    return this.editBookForm.get('date_published'); 
  }

  get category() {
    return this.editBookForm.get('category');
  }

  get quantity() { 
    return this.editBookForm.get('quantity');
  }

  get status() { 
    return this.editBookForm.get('status');
  }

}
