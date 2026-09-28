import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  
  goToProject() {
    this.router.navigate(['/dashboard/project']);
  }

  goToTask() {
    this.router.navigate(['/dashboard/task']);
  }

  goToUser() {
    this.router.navigate(['/dashboard/user']);
  }

  logout() {
    this.router.navigate(['/login']);
  }


}