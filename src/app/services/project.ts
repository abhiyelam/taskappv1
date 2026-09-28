import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://localhost:7073/api/Project';
  // Replace 7073 with your API port number

  constructor(private http: HttpClient) { }

  // Get All Projects
  getAllProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllProjects`);
  }

  // Get Project By Id
  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetProjectById/${id}`);
  }

  // Add Project
  addProject(project: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddProject`, project);
  }

  // Update Project
  updateProject(project: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateProject`, project);
  }

  // Delete Project
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteProject/${id}`);
  }
}