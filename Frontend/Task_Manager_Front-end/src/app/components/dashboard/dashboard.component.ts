import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((allTasks: Task[]) => {
      this.todoTasks = allTasks.filter((t: Task) => t.status === 'TO_DO');
      this.inProgressTasks = allTasks.filter((t: Task) => t.status === 'IN_PROGRESS');
      this.doneTasks = allTasks.filter((t: Task) => t.status === 'COMPLETED');
    });
  }

 
}
