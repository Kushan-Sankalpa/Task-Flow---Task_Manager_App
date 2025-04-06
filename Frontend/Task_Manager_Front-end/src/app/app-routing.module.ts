import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

//routes
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },  
    { path: 'login', component: LoginComponent },  
    { path: 'register', component: RegisterComponent },        
    { path: 'tasks', component: TaskListComponent },         
    { path: 'tasks/new', component: TaskFormComponent },    
    { path: 'tasks/edit/:id', component: TaskFormComponent },
    { path: 'tasks/details/:id', component: TaskDetailsComponent } 

  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
  })
  export class AppRoutingModule { }