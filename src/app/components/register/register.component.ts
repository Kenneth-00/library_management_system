import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required, Validators.minLength(6)],
  name: ['', Validators.required]
  });
  }
  
  ngOnInit() {
  }
  
  postdata(loginForm1: { value: { name: any; email: any; password: any; }; })
  {
  this.dataService.userregistration(loginForm1.value.name,loginForm1.value.email,loginForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['login']);
  },
  
  error => {
  });
  }
  
  get email() { 
    return this.loginForm.get('email'); 
  }

  get password() { 
    return this.loginForm.get('password'); 
  }

  get name() { 
    return this.loginForm.get('name');
  }
}
