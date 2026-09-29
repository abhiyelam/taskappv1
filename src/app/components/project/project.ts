import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectComponent  {

  projects: any[] = [];

  isEditMode = false;

  project: any = {
    projectId: 0,
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    createdBy: 0
  };

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  // Get All Projects
  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Save / Update Project
  saveProject() {

    if (this.isEditMode) {

      this.projectService.updateProject(this.project).subscribe({
        next: () => {
          alert("Project Updated Successfully");
          this.loadProjects();
          this.resetForm();
        },
        error: (err) => console.log(err)
      });

    } else {

      this.projectService.addProject(this.project).subscribe({
        next: () => {
          alert("Project Added Successfully");
          this.loadProjects();
          this.resetForm();
        },
        error: (err) => console.log(err)
      });

    }

  }

  // Edit Project
  editProject(selectedProject: any) {

    this.isEditMode = true;

    this.project = {
      projectId: selectedProject.projectId,
      projectName: selectedProject.projectName,
      description: selectedProject.description,
      startDate: selectedProject.startDate
        ? selectedProject.startDate.split('T')[0]
        : '',
      endDate: selectedProject.endDate
        ? selectedProject.endDate.split('T')[0]
        : '',
      status: selectedProject.status,
      createdBy: selectedProject.createdBy
    };
  }

  // Delete Project
  deleteProject(id: number) {

    if (confirm("Are you sure you want to delete this project?")) {

      this.projectService.deleteProject(id).subscribe({
        next: () => {
          alert("Project Deleted Successfully");
          this.loadProjects();
        },
        error: (err) => console.log(err)
      });

    }
  }

  // Clear Form
  resetForm() {

    this.isEditMode = false;

    this.project = {
      projectId: 0,
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
      createdBy: 0
    };

  }

}