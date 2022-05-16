import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));

    if(this.dataService.isLoggedIn())
    {
      console.log("logged in");
      this.loginbtn = false;
      this.logoutbtn = true
    }

    else
    {
      this.loginbtn = true;
      this.logoutbtn = false
    }
  }
  ngOnInit(): void {
  }

  private changeName(name: boolean): void {
    this.loginbtn = name;
    this.logoutbtn = !name;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
}
