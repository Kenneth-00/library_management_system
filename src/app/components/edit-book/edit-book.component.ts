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

  editBookForm: FormGroup;

  book: Books;
  bookDetails: any;
  bookID: any;
  dataLoaded: boolean=false;

  constructor(private formBuilder: FormBuilder,
    private dataService: ApiService,
    private router:Router,
    private activateRoute: ActivatedRoute) {

      this.editBookForm = this.formBuilder.group({
        book_title: [Validators.required],
        authors: ['', [Validators.required]],
        date_published: ['', [Validators.required]],
        category: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        status : ['', [Validators.required]]
      })
    }

  ngOnInit() {
    
    let id = '';
    if(this.activateRoute.snapshot.params['id']){
      id = this.activateRoute.snapshot.params['id'];
      console.log(id);

      this.editBookForm = this.formBuilder.group({
        book_title : [''],
        authors : [''],
        date_published : [''],
        category : [''],
        quantity :[''],
        status : ['']
      });
        
      this.dataLoaded=true;
    }

    
    
  }

  loadbookDetails(id:number){

    this.dataService.loadBookInfoById(id).subscribe(response => 
    {
      this.editBookForm.controls['book_title'].setValue(response.book_title);
      this.editBookForm.controls['authors'].setValue(response.authors);
      this.editBookForm.controls['date_published'].setValue(response.date_published);
      this.editBookForm.controls['category'].setValue(response.category);
      this.editBookForm.controls['quantity'].setValue(response.quantity);
      this.editBookForm.controls['status'].setValue(response.status);
    })

  }

  postdata(editBookForm:any) {

    this.dataService.updateBook(this.book, this.bookID)
    .subscribe( 
      (response: any) => {
        this.book.book_title = this.editBookForm.value.book_title;
        this.book.authors = this.editBookForm.value.authors;
        this.book.date_published = this.editBookForm.value.date_published;
        this.book.category = this.editBookForm.value.category;
        this.book.quantity = this.editBookForm.value.quantity;
        this.book.status = this.editBookForm.value.status;

        console.log(response);
      },
      (error) => {
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
