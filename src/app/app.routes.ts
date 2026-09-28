import { Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create';
import { ProjectComponent } from './components/project/project';
import { DashboardComponent } from './components/dashboard/dashboard';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
//export const routes: Routes = [

  //{ path: 'task-create', component: TaskCreateComponent },
  //{ path: 'project', component: ProjectComponent },

  //{ path: '', redirectTo: 'login', pathMatch: 'full' },

  //{ path: 'login', component: LoginComponent },

  //{ path: '', component: DashboardComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'project', component: ProjectComponent },

 // { path: 'task', component: TaskComponent },

  //{ path: 'user', component: UserComponent }
//];
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',component: DashboardComponent,
    
    children: [

      { path: 'task', component: TaskCreateComponent },
      { path: 'project', component: ProjectComponent },
      //{ path: 'user', component: UserComponent },

      { path: '', redirectTo: 'task', pathMatch: 'full' }

    ]
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];