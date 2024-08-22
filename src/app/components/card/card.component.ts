import { Component, OnInit, Input } from '@angular/core';
import { userI } from 'src/app/interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails? : userI; 
  constructor() { }
  ngOnInit(): void {
  }
}
