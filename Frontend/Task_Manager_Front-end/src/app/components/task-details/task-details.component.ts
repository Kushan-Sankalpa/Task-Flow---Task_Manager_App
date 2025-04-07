import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  // On initialization, load task details based on the route ID.
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTask(+id).subscribe({
        next: (data: Task) => {
          this.task = data;
          console.log('Loaded task:', this.task); 
        },
        error: err => {
          console.error("Failed to load task details", err);
        }
      });
    }
  }

  // Navigate back to the tasks list.
  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
