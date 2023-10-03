import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        // Handle navigation error (e.g., log the error, redirect, or display an error message)
        console.error('Navigation error:', event.error);
        this.router.navigate(['/error']); // Redirect to an error page
      }
    });
  }
}
