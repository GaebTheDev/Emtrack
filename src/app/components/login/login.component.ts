import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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
  errorTitle: string = '';
  errorMessage: string = '';

  constructor(private fb:FormBuilder,private messageService: MessageService){}

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  showLoginError(){
    if (this.email.errors?.['required']) {
      console.log(this.email);
      this.messageService.add({ severity: 'error', summary: 'Invalid email', detail: 'Please enter a valid email' });
    }else if(this.password.errors?.['required']){
      console.log(this.password);
      this.messageService.add({ severity: 'error', summary: 'Invalid password', detail: 'Please enter a valid password' });
    }else{
      this.messageService.add({severity: 'success', summary: 'Login successful', detail: 'You will now be redirected to the dashboard' })
    }
    
  }
}
