import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards: any;
  constructor(private http: HttpService) { }
  dashboardData?: string;
  ngOnInit(): void {
    this.http.getApiCall("").subscribe({
      next: (res: any) => {
        this.cards = res;
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
}
