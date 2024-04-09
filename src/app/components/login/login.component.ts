import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService) { }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      res => {
        if (res.length >= 1) {
          if (res[0].password === password) {
            this.messageService.add({ severity: 'success', summary: 'Login successful', detail: 'You will now be redirected to the dashboard' })
            this.router.navigate(['dashboard']);
          }else{
            this.messageService.add({ severity: 'error', summary: 'Login unsuccessful', detail: 'You have entered the wrong password' })
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Login unsuccessful', detail: 'User not found' })

        }
      },
      err => { this.messageService.add({ severity: 'error', summary: 'Login unsuccessful', detail: 'An error has occurred' }) });


  }
}
