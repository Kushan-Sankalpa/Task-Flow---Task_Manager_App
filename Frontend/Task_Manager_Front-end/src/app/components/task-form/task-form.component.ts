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
  taskId!: number;
  
  // Use this to handle the case when user clicks submit without touching the fields.
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['TO_DO']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id'];
        this.taskService.getTask(this.taskId).subscribe(task => {
          this.taskForm.patchValue(task);
        });
      }
    });
  }

  onSubmit(): void {
    // Flag to indicate the user has attempted submission.
    this.formSubmitted = true;

    // If invalid, mark all controls as touched to show errors.
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const taskData: Task = this.taskForm.value;

    if (this.isEditMode) {
      this.taskService.updateTask(this.taskId, taskData).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskService.createTask(taskData).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
