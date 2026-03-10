import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://backend:80/api/Task';

  constructor(private http: HttpClient) { }

  // GET all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/GetAllTasks`);
  }

  // ADD new task
  addTask(task: Task): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddTask`, task);
  }

  // DELETE task
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteTask/${id}`);
  }

  // UPDATE task
  updateTask(task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateTask`, task);
  }

  // GET task by id
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/GetTaskById/${id}`);
  }
}
