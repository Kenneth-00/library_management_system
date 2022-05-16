import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // loginForm = this.formBuilder.group ({
  //   email: this.formBuilder.control(null, [Validators.required, Validators.email]),
  //   password: this.formBuilder.control(null, [Validators.required, Validators.minLength(6)])
  // })
  
  constructor(private formBuilder:FormBuilder, private dataService: ApiService, private router: Router) {
    this.loginForm = this.formBuilder.group ({
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit() {
  }
  
  postdata(loginForm1: { value: { email: any; password: any; }; }){
    this.dataService.userlogin(loginForm1.value.email, loginForm1.value.password)
    .pipe(first())
    .subscribe(
      data => {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl: '/dashboard-admin';
        this.router.navigate([redirect]);
      },

      error => {
        alert("User name or password is incorrect")
      }
    );
  }

  // save() {
  //   this.dataService.userlogin();

  // }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

