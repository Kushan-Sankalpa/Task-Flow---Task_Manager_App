
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string | null = null;
  private subscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  // Subscribe to the username stream on initialization.
  ngOnInit(): void {
    this.subscription = this.authService.username$.subscribe(name => {
      this.username = name;
    });
  }

  // Clears stored user data and navigates to the login page.
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.clearUsername();
    this.router.navigate(['/login']);
  }

  // Unsubscribe when the component is destroyed.
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
