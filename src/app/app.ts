import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taskappv1');
}
