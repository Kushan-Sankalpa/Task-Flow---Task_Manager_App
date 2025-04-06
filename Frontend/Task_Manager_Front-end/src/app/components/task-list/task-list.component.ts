import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];  // list of tasks to be displayed.

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  // Loads tasks by calling the TaskService.
  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  // Deletes a task and reloads the list.
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  // Navigates to the task form for editing.
  editTask(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }
}
