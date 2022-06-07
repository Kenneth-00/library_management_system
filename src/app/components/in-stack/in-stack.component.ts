import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  editBookForm: FormGroup;



  constructor(private dataService: ApiService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.adminview();

    // this.editBookForm = this.formBuilder.group({
    //   book_title: ['', [Validators.required]],
    //   authors: ['', [Validators.required]],
    //   date_published: ['', [Validators.required]],
    //   category: ['', [Validators.required]],
    //   quantity: ['', [Validators.required]],
    //   status : ['', [Validators.required]]
    // })

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

  removeBook(id: number){
      this.dataService.deleteBook(id)
    .subscribe(
      (response) => {
        this.adminview();
      }
    )
  }
}
