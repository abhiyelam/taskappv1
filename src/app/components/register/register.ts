import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    role: 'User'
  };
  message = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register() {

    this.authService.register(this.user).subscribe({

      next: (res: any) => {
        this.message = '';
        //alert("Registration Successful");

        this.router.navigate(['/login']);

      },

      error: (err) => {

        this.message = err.error;
      }

    });

  }

}