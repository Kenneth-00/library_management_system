import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Role } from 'src/app/role';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  users: Users[];

  constructor(private formBuilder:FormBuilder, private dataService: ApiService, private router: Router) {
    this.loginForm = this.formBuilder.group ({
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit() {
  }
  
  postdata(loginForm: any){
    this.dataService.userlogin(
      loginForm.value.email, 
      loginForm.value.password)

      .subscribe( 
        (response) => {
          this.users = response;
          console.log(response);
          if(Role.Admin == 'Admin'){
            this.router.navigateByUrl('login/dashboard-admin/in-stack');
          }
          else{
            this.router.navigateByUrl('login/dashboard-customer');}
          
        },
        (error) =>{
          console.log('error', error)
         // alert("Logged in failed!")
        }
      );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}



