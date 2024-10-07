import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userStats = {
    totalUsers: 120,
    activeUsers: 95,
    inactiveUsers: 25
  };

}
