import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // For building forms in code.
import { HttpClientModule } from '@angular/common/http'; // To make HTTP requests.
import { AppRoutingModule } from './app-routing.module'; // Handles navigation (routing).

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
    declarations: [
      AppComponent,        // The root component.
      LoginComponent,      // The login page.
      TaskListComponent,   // The page that shows the list of tasks.
      TaskFormComponent    // The page for adding/editing tasks.
    ],
    imports: [
      BrowserModule,       // Needed for running in a browser.
      ReactiveFormsModule, // Lets us build reactive forms.
      HttpClientModule,    // Allows making HTTP calls to the backend.
      AppRoutingModule     // Enables routing between pages.
    ],
    providers: [],
    bootstrap: [AppComponent] 
  })
  export class AppModule { }