import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pending-books',
  templateUrl: './pending-books.component.html',
  styleUrls: ['./pending-books.component.scss']
})
export class PendingBooksComponent implements OnInit {

  requests: any =[];

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {

    this.requestBook();

  }

  requestBook(){
    this.dataService.viewRequests()
    .subscribe(
      (response) => {
        console.log('test ', response);
        this.requests = response;

      }
    );
  }

}
