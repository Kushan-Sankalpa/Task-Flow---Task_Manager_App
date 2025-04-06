
import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];  // List of tasks to display.

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  // Loads tasks from the backend.
  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  // Deletes a task and reloads the list.
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  // Navigates to the task form to edit the task.
  editTask(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }
}
