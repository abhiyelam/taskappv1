import { Component } from '@angular/core';
import { TaskService } from '../../services/taskay';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-create.html',
  styleUrl: './task-create.css',
})
export class TaskCreateComponent {

  tasks: any[] = [];
  isEditMode: boolean = false;
  task: any = {
    title: '',
    description: '',
    isCompleted: false
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  saveTask() {

    if (this.isEditMode) {
  
      // UPDATE
      this.taskService.updateTask(this.task).subscribe({
        next: () => {
          this.loadTasks();
          this.resetForm();
        },
        error: (err) => console.error("Update Error:", err)
      });
  
    } else {
  
      // ADD
      this.taskService.addTask(this.task).subscribe({
        next: () => {
          this.loadTasks();
          this.resetForm();
        },
        error: (err) => console.error("Add Error:", err)
      });
  
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
  editTask(selectedTask: any) {

    this.isEditMode = true;
  
    this.task = {
      taskId: selectedTask.taskId,
      title: selectedTask.title,
      description: selectedTask.description,
      isCompleted: selectedTask.isCompleted
    };
  }
  resetForm() {
    this.task = {
      title: '',
      description: '',
      isCompleted: false
    };
  }
}
