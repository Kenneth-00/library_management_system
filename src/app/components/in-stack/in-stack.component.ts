import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-in-stack',
  templateUrl: './in-stack.component.html',
  styleUrls: ['./in-stack.component.scss']
})
export class InStackComponent implements OnInit {

  book: Books[];
  bookDetails: any = {};

  editBookForm: FormGroup;

  constructor(private dataService: ApiService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.adminview();

  }

  ngOnInit(): void {
  }

  adminview(){
    this.dataService.adminviewBooks()
    .subscribe(
      (response) => {
        this.book = response;
        console.log('test ', response);
      }
    );
  }


  removeBook(book: any){
      this.dataService.deleteBook(this.activateRoute.snapshot.params['id'])
    .subscribe(
      (response) => {
        console.log(this.activateRoute.snapshot.params['id']);
        //this.adminviewBookDetails();
      }
    );
  }

  
}
