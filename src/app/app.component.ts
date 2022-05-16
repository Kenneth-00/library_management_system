import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LMS';

  // loginbtn: boolean;
  // logoutbtn: boolean;

  // constructor(private dataService: ApiService) {
  //   dataService.getLoggedInName.subscribe(name => this.changeName(name));

  //   if(this.dataService.isLoggedIn())
  //   {
  //     console.log("logged in");
  //     this.loginbtn = false;
  //     this.logoutbtn = true
  //   }

  //   else
  //   {
  //     this.loginbtn = true;
  //     this.logoutbtn = false
  //   }
  // }

  // private changeName(name: boolean): void {
  //   this.loginbtn = name;
  //   this.logoutbtn = !name;
  // }

  // logout() {
  //   this.dataService.deleteToken();
  //   window.location.href = window.location.href;
  // }
}
