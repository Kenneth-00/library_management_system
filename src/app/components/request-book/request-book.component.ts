import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.scss']
})
export class RequestBookComponent implements OnInit {

  requestBook: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
