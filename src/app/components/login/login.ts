import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({

      next: (user: any) => {

        //this.authService.saveUser(user);

        alert("Login Successful");

        this.router.navigate(['/dashboard']);

      },

      error: () => {

        alert("Invalid Email or Password");

      }

    });

  }

}


