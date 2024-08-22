import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  dashboardData?: string;
  ngOnInit(): void {
  }
  cards = [
    {
      "name": "Jennie Nichols",
      "email": "example@gmail.com",
      "address": "8929 Valwood Pkwy, Billings, Michigan, 63104",
      "role": "Admin",
      "imgUrl": "https://material.angular.io/assets/img/examples/shiba1.jpg"
    }
  ]
}
