import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];
  filteredCards: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpService) {}

  dashboardData?: string;

  ngOnInit(): void {
    this.http.getApiCall("").subscribe({
      next: (res: any) => {
        this.cards = res;
        this.filteredCards = res;
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

  filterCards(): void {
    this.filteredCards = this.cards.filter(card => 
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
