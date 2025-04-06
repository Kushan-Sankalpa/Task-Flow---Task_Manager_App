import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;      
  isEditMode: boolean = false; 
  taskId: number;           

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute, 
    private router: Router         
  ) {
    // Create the form with a required title field.
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TO_DO']  // Default status.
    });
  }

  ngOnInit(): void {
    // Check if there is an 'id' in the route (edit mode).
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id'];
        // Load the existing task data into the form.
        this.taskService.getTask(this.taskId).subscribe(task => {
          this.taskForm.patchValue(task);
        });
      }
    });
  }

  // Called when the form is submitted.
  onSubmit(): void {
    if (this.taskForm.invalid) return;

    const taskData: Task = this.taskForm.value;
    if (this.isEditMode) {
      this.taskService.updateTask(this.taskId, taskData).subscribe(() => {
        this.router.navigate(['/tasks']); // Redirect after update.
      });
    } else {
      this.taskService.createTask(taskData).subscribe(() => {
        this.router.navigate(['/tasks']); // Redirect after creation.
      });
    }
  }
}
