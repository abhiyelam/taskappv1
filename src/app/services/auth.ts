import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'https://localhost:7073/api/Auth'; // Change to your API URL

  constructor(private http: HttpClient) { }

  // Register
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, user);
  }

  // Login
  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, loginData);
  }

  // Save logged-in user
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get logged-in user
  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  // Check login status
  isLoggedIn(): boolean {
    return localStorage.getItem('user') != null;
  }

  // Logout
  logout() {
    localStorage.removeItem('user');
  }

}