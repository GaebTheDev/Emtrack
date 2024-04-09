import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationForm = this.fb.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    cpassword: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authservice: AuthService,
    private router: Router) { }

  get fname() {
    return this.registrationForm.controls['fname'];
  }

  get lname() {
    return this.registrationForm.controls['lname'];
  }
  get email() {
    return this.registrationForm.controls['email'];
  }

  get password() {
    return this.registrationForm.controls['password'];
  }

  get cpassword() {
    return this.registrationForm.controls['cpassword'];
  }

  register() {
    let hasError: boolean = this.validateRegistration();
    console.log(hasError);
    if (!hasError) {
      const postData = { ...this.registrationForm.value };
      delete postData.cpassword;
      postData.email = postData.email?.toLowerCase();
      this.authservice.registerUser(postData as User).subscribe(
        res => {
          this.messageService.add({ severity: 'success', summary: "Registration successful", detail: "Your account has been created" });
          this.router.navigate(['login']);
        },
        err => {
          this.messageService.add({ severity: 'error', summary: "Registration unsuccessful", detail: "Something went wrong" });
        });

    } else {
      //there is an error in registration
    }
  }

  validateRegistration() {
    let hasError: boolean = false;
    if (this.fname.value == '' || this.lname.value == '' || this.email.value == '' || this.password.value == '' || this.cpassword.value == '') {
      hasError = true;
      this.messageService.add({ severity: 'error', summary: "Incomplete details", detail: "Please enter a value to each field" })
    } else if (this.password.value != null && this.password.value.length < 8) {
      hasError = true;
      this.messageService.add({ severity: 'error', summary: "Password invalid", detail: "Password must be atleast 8 characters" })
    } else if (this.password.value != this.cpassword.value) {
      hasError = true;
      this.messageService.add({ severity: 'error', summary: "Password does not match", detail: "Password and Confirm password must be the same" })
    }
    return hasError;
  }

}
