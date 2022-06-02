import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;

  user: Users[];

  constructor(private formBuilder: FormBuilder,private dataService: ApiService,private router:Router) {
    
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]],
      role : ['', [Validators.required]]
    },
    {validators: this.MustMatch('password', 'confirmpassword')}
    )
  }

  MustMatch(controlName: string, matchingcontrolName: string) {
    return(registerForm:FormGroup) => {
      const control = registerForm.controls[controlName];
      const matchingControl = registerForm.controls[matchingcontrolName];

      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        
        //returns if another validator has already found an error on the matchingControl
        return;
      }

      //set error on matchingControl if validation fails
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }else{
        matchingControl.setErrors(null);
      }
    }
  }
  
  ngOnInit() {
  }
  
  postdata(registerForm: any)
  {
    this.dataService.userregistration(
      registerForm.value.name,
      registerForm.value.email,
      registerForm.value.password,
      registerForm.value.confirmpassword,
      registerForm.value.role
    )
    // .pipe(first())
    .subscribe( 
      (response) => {
        this.user = response;
        console.log(response);
        alert("Registration Successful!");
      }
    );
  }
  
  get name() { 
    return this.registerForm.get('name');
  }

  get email() { 
    return this.registerForm.get('email'); 
  }

  get password() { 
    return this.registerForm.get('password'); 
  }

  get confirmpassword() { 
    return this.registerForm.get('confirmpassword');
  }

  get role() { 
    return this.registerForm.get('role');
  }
  
}
