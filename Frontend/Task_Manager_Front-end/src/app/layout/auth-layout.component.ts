import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule],  
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  username: string | null = null;
  subscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  // Subscribe to the username stream on component initialization.
  ngOnInit(): void {
    this.subscription = this.authService.username$.subscribe(name => {
      this.username = name;
    });
  }

  // Log out the user, clear stored data, and navigate to login.
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.clearUsername();
    this.router.navigate(['/login']);
  }

   // Unsubscribe to prevent memory leaks.
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
