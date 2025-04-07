import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

   // Load tasks when the component is initialized.
  ngOnInit(): void {
    this.loadTasks();
  }

   // Retrieve tasks from the backend.
  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      console.log('Loaded tasks:', this.tasks); // Debug: Verify each task.status.
    });
  }

  // Delete a task and reload the task list.
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  // Navigate to the edit task form.
  editTask(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }
}
