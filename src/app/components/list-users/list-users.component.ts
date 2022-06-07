import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  user: Users[];
  constructor(private dataService: ApiService, private router: Router) {
    this.viewUserDetails();
   }

  ngOnInit(): void {
  }

  viewUserDetails(){
    this.dataService.viewUsers()
    .subscribe(
      (response) => {
        console.log('test ', response);
        this.user = response;

      }
    );
  }

  removeUser(id: number){
    this.dataService.deleteUser(id)
  .subscribe(
    (response) => {
      console.log(response);
      this.viewUserDetails();
    }
  );
}


}
