import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // For building reactive forms.
import { HttpClientModule } from '@angular/common/http'; // To make HTTP requests.
import { AppRoutingModule } from './app-routing.module'; // Handles navigation (routing).

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,        // The root component
    LoginComponent,      // Your Login component
    TaskListComponent,   // Example: shows a list of tasks
    TaskFormComponent    // Example: form for adding/editing tasks
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
