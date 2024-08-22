import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userI } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails?: userI;
  @Output() delete = new EventEmitter<userI>();

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit(this.cardDetails);
    this.http.deleteApiCall(this.cardDetails!.id!).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
}