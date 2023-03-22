import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private route: Router) {}
  login_UserData = JSON.parse(localStorage.getItem('login_info')!);
  showUsers = false;
  logout() {
    localStorage.removeItem('login_info');
    this.route.navigate(['/login']);
  }

  manageUsers() {
    this.showUsers = !this.showUsers;
  }
}
